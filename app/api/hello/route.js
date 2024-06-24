//! Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request) {
  return new Response("Hello World!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
