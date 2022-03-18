export async function onRequest({ request, env }) {
  return new Response('ENV Variable: ' + env.MY_ENV_VAR)
}
