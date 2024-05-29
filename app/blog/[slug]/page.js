// export default async function BlogPage(props : {
//     params : {
//         slug : number
//     }
// }) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.slug}`)
//     if (!res.ok) {
//         throw new Error('Failed to Fetch post')
//     }
//     const json : {
//         body : string
//         id: number
//         title : string
//         userId: number
//     } = await res.json()
//     return (
//         <>
//             <h1>{json.title}</h1>
//             <span>written by author ID: {json.userId}</span>
//             <p>{json.body}</p>
//         </>
//     )
// }

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
