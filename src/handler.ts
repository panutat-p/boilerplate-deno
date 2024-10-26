export function defaultHandler(_req: Request) {
  return new Response('🐵 Not found', { status: 404 })
}

export function getHome(_req: Request) {
  return new Response('🏠 Home page')
}

export function getUser(_req: Request, _info?: Deno.ServeHandlerInfo, params?: URLPatternResult | null): Response {
  if (params) {
    return new Response(params.pathname.groups.id)
  }
  return new Response('❌ User ID not found', { status: 404 })
}
