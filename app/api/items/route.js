export async function GET() {
  const res = await fetch("https://data.mongodb-api.com/...", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return Response.json(data);
}
