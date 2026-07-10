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

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Unable to fetch news."
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=600"
      }
    });

  } catch (err) {

    return new Response(
      JSON.stringify({
        success: false,
        message: err.message
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
export async function onRequest(context) {
  // Cloudflare Environment Variable থেকে API Key রিড করবে
  const apiKey = context.env.NEWS_API_KEY; 
  
  // তুমি যে News API ব্যবহার করছ তার URL (এখানে NewsAPI.org এর উদাহরণ দেওয়া হলো)
  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "TheBengaliMedia-App"
      }
    });
    
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // CORS এরর এড়ানোর জন্য
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
