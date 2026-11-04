export default {
  async fetch(request, env) {
    let response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      const url = new URL(request.url);
      const notFoundUrl = new URL('/404.html', url.origin);
      const notFoundRes = await env.ASSETS.fetch(notFoundUrl);
      if (notFoundRes.status === 200) {
        return new Response(notFoundRes.body, {
          status: 404,
          statusText: 'Not Found',
          headers: notFoundRes.headers,
        });
      }
    }
    return response;
  },
};
