import { type Route, route, serveDir } from '@std/http'
import { defaultHandler, getHome } from './handler.ts'
import { getUser } from './handler.ts'

const routes: Route[] = [
  {
    pattern: new URLPattern({ pathname: '/' }),
    handler: getHome,
  },
  {
    pattern: new URLPattern({ pathname: '/users/:id' }),
    handler: getUser,
  },
  {
    pattern: new URLPattern({ pathname: '/static/*' }),
    handler: (req) => serveDir(req),
  },
]

const handler = route(routes, defaultHandler)

export default {
  fetch(req) {
    return handler(req)
  },
} satisfies Deno.ServeDefaultExport
