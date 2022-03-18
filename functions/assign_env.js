export async function onRequest({ request, env }) {
  env.MY_ENV_VAR = request.url
  return new Response('ENV Variable: ' + env.MY_ENV_VAR + ' and Request URL: ' + request.url)
}
