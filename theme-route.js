import { createReadStream, statSync } from 'node:fs'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROUTE_PREFIX = '/doro-paradise-theme'
const ASSETS = fileURLToPath(new URL('./assets/', import.meta.url))

const FILES = Object.freeze({
  backgroundLight: 'background-light.png',
  backgroundDark: 'background-dark.png',
  overlay: 'dorothy-doro-overlay.png',
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

export function registerThemeRoutes(ctx) {
  ctx.inject(['webServer'], (scope) => {
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
  })
}
