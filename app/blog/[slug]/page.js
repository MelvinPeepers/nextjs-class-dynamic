import React from "react";

export default async function BlogPage(props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.params.slug}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const json = await res.json();
  return (
    <>
      <h1>{json.title}</h1>
      <span>written by author ID: {json.userId}</span>
      <p>{json.body}</p>
    </>
  );
}
