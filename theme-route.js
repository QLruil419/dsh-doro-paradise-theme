import { createReadStream, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROUTE_PREFIX = '/doro-paradise-theme'
const SETTINGS_PATH = `${ROUTE_PREFIX}/settings`
const STATE_FILENAME = 'doro-paradise-theme.json'
const MAX_SETTINGS_BYTES = 16 * 1024
const ASSETS = fileURLToPath(new URL('./assets/', import.meta.url))

const NUMBER_RULES = Object.freeze({
  wallpaperOpacity: [0, 100],
  wallpaperBlur: [0, 32],
  sidebarOpacity: [18, 100],
  sidebarArtBottom: [48, 320],
  panelOpacity: [28, 100],
  glassBlur: [0, 40],
  saturation: [80, 150],
  dorothyOpacity: [0, 100],
  dorothySize: [42, 110],
  doroSize: [96, 480],
})
const BOOLEAN_KEYS = Object.freeze(['liquidGlass', 'petals'])

const FILES = Object.freeze({
  backgroundLight: 'background-light-clean.png',
  backgroundDark: 'background-dark-clean.png',
  overlay: 'dorothy-sidebar-tea-v2.png',
  dorothy: 'dorothy-wallpaper-v2.png',
  doro: 'doro-overlay.png',
  icon: 'doro-icon.svg',
  favicon: 'doro-favicon.svg',
  heroLogo: 'doro-paradise-wordmark.svg',
  wordmark: 'doro-paradise-wordmark.svg',
  frame: 'rose-frame.svg',
})

const CONTENT_TYPES = {
  '.svg': 'image/svg+xml; charset=utf-8',
  '.png': 'image/png',
}

function assetUrl(key) {
  const file = join(ASSETS, FILES[key])
  const stat = statSync(file)
  return `${ROUTE_PREFIX}/asset/${key}?v=${Math.trunc(stat.mtimeMs).toString(36)}-${stat.size.toString(36)}`
}

function statePath() {
  const home = process.env.DSH_HOME?.length > 0 ? process.env.DSH_HOME : join(homedir(), '.dsh')
  return join(home, STATE_FILENAME)
}

function sanitizeAppearance(value) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return undefined
  const appearance = {}
  for (const [key, [min, max]] of Object.entries(NUMBER_RULES)) {
    const number = Number(value[key])
    if (Number.isFinite(number)) appearance[key] = Math.min(max, Math.max(min, number))
  }
  for (const key of BOOLEAN_KEYS) {
    if (typeof value[key] === 'boolean') appearance[key] = value[key]
  }
  return appearance
}

function readAppearanceState() {
  try {
    const parsed = JSON.parse(readFileSync(statePath(), 'utf8'))
    return sanitizeAppearance(parsed?.appearance) ?? null
  } catch {
    return null
  }
}

function writeAppearanceState(appearance) {
  const file = statePath()
  mkdirSync(dirname(file), { recursive: true })
  const temporary = `${file}.tmp`
  const body = JSON.stringify({ version: 1, appearance, updatedAt: new Date().toISOString() }, null, 2)
  writeFileSync(temporary, body, { encoding: 'utf8', mode: 0o600 })
  try {
    renameSync(temporary, file)
  } catch {
    writeFileSync(file, body, { encoding: 'utf8', mode: 0o600 })
  }
}

function parseAuthority(authority) {
  try {
    return new URL(`http://${authority}`)
  } catch {
    return undefined
  }
}

function isLoopbackHostname(hostname) {
  if (hostname === 'localhost' || hostname === '[::1]') return true
  const parts = hostname.split('.')
  return parts.length === 4
    && parts[0] === '127'
    && parts.every(part => /^\d{1,3}$/.test(part) && Number(part) <= 255)
}

function canonicalAuthority(url) {
  return url.port === '' ? url.hostname : `${url.hostname}:${url.port}`
}

function isTrustedAuthority(hostUrl, trustedHosts) {
  return trustedHosts.some(entry => {
    if (typeof entry !== 'string') return false
    const entryUrl = parseAuthority(entry)
    if (entryUrl === undefined) return false
    return canonicalAuthority(entryUrl) === entryUrl.hostname
      ? entryUrl.hostname === hostUrl.hostname
      : entryUrl.host === hostUrl.host
  })
}

function isTrustedRequest(request, trustedHosts = []) {
  const host = typeof request.headers.host === 'string' ? request.headers.host : undefined
  if (host === undefined) return false
  const hostUrl = parseAuthority(host)
  if (hostUrl === undefined) return false
  const trusted = isLoopbackHostname(hostUrl.hostname) || isTrustedAuthority(hostUrl, trustedHosts)
  if (!trusted || request.headers['sec-fetch-site'] === 'cross-site') return false
  const origin = request.headers.origin
  if (origin === undefined) return true
  try {
    return new URL(origin).host === hostUrl.host
  } catch {
    return false
  }
}

async function readJsonBody(request) {
  const chunks = []
  let size = 0
  for await (const chunk of request) {
    const buffer = Buffer.from(chunk)
    size += buffer.length
    if (size > MAX_SETTINGS_BYTES) throw new Error('settings request is too large')
    chunks.push(buffer)
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

function writeJson(response, status, value) {
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  })
  response.end(JSON.stringify(value))
}

async function handleSettings(request, response, trustedHosts) {
  if (!isTrustedRequest(request, trustedHosts)) {
    writeJson(response, 403, { ok: false, error: 'forbidden' })
    return
  }
  if (request.method !== 'POST') {
    writeJson(response, 405, { ok: false, error: 'method not allowed' })
    return
  }
  const contentType = typeof request.headers['content-type'] === 'string' ? request.headers['content-type'].toLowerCase() : ''
  if (!contentType.startsWith('application/json')) {
    writeJson(response, 415, { ok: false, error: 'content-type must be application/json' })
    return
  }
  try {
    const payload = await readJsonBody(request)
    if (payload?.method === 'get') {
      writeJson(response, 200, { ok: true, value: { appearance: readAppearanceState() } })
      return
    }
    if (payload?.method === 'set') {
      const appearance = sanitizeAppearance(payload.appearance)
      if (appearance === undefined) {
        writeJson(response, 400, { ok: false, error: 'appearance must be an object' })
        return
      }
      writeAppearanceState(appearance)
      writeJson(response, 200, { ok: true, value: { saved: true } })
      return
    }
    writeJson(response, 400, { ok: false, error: 'unknown settings method' })
  } catch (error) {
    console.error('[Doro Paradise] settings persistence error:', error)
    writeJson(response, 500, { ok: false, error: 'settings persistence failed' })
  }
}

export function registerThemeRoutes(ctx) {
  ctx.inject(['webServer', 'webRuntime'], (scope) => {
    scope.effect(() => scope.webServer.register({
      kind: 'exact',
      path: `${ROUTE_PREFIX}/manifest`,
      handler: (_request, response) => {
        response.writeHead(200, {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        })
        response.end(JSON.stringify(Object.fromEntries(
          Object.keys(FILES).map(key => [key, assetUrl(key)]),
        )))
      },
    }), 'doro-paradise: manifest route')

    scope.effect(() => scope.webServer.register({
      kind: 'prefix',
      path: `${ROUTE_PREFIX}/asset`,
      handler: (request, response) => {
        const key = (request.url ?? '').split('?')[0].split('/').filter(Boolean).pop() ?? ''
        const filename = FILES[key]
        if (filename === undefined) {
          response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
          response.end('unknown Doro Paradise asset')
          return
        }
        const file = join(ASSETS, filename)
        response.writeHead(200, {
          'content-type': CONTENT_TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream',
          'cache-control': 'public, max-age=31536000, immutable',
        })
        createReadStream(file).pipe(response)
      },
    }), 'doro-paradise: asset route')

    scope.effect(() => scope.webServer.register({
      kind: 'exact',
      path: SETTINGS_PATH,
      handler: (request, response) => handleSettings(request, response, scope.webRuntime.trustedHosts),
    }), 'doro-paradise: settings persistence route')
  })
}
