export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3001/posts/${params.postId}`);
  const post = await res.json();

  return {
    props: { post },
  };
}


export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
