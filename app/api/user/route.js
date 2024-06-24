// app/api/user/route.js

export const dynamic = "force-dynamic";

export async function GET(request) {
  // Simulated user data
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
  };

  // Return the user data as JSON
  return new Response(JSON.stringify(user), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request) {
  try {
    // Parse the request body as JSON
    const body = await request.json();

    // Simulated response with the received data
    const response = {
      message: "User data received successfully",
      data: body,
    };

    // Return the response as JSON
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Return an error response if something goes wrong
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
