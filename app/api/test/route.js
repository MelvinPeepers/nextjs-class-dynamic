// this tells Next.js to always generate a new response for this route
export const dynamic = "force-dynamic";

// this function handles GET requests to /api
export async function GET(request) {
  // create a JSON response
  return new Response(
    JSON.stringify({ message: "Hello from Next.js Route Handler!" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
