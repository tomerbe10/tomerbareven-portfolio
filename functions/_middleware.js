
export async function onRequest(context) {
  return context.env.PORTFOLIO.fetch(context.request);
}
