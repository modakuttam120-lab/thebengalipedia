export async function onRequest(context) {
  const { request, env } = context;

  const url = new URL(request.url);

  const category = url.searchParams.get("category") || "general";
  const lang = url.searchParams.get("lang") || "en";
  const country = url.searchParams.get("country") || "in";

  const endpoint =
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=20&apikey=${env.GNEWS_API_KEY}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (e) {
    return new Response(
      JSON.stringify({
        success: false,
        error: e.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
