import Schema from '@deepseek-ai/schemastery'
import { registerThemeRoutes } from './theme-route.js'

export const name = 'doro-paradise-theme'
export const Config = Schema.object({})

export function apply(ctx) {
  registerThemeRoutes(ctx)
}
