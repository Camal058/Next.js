import { categories } from "@/data";

export default function PostPage({ params }) {
  const { category, postId } = params;
  const categoryData = categories.find((cat) => cat.id === category);

  if (!categoryData) {
    return <div>Category not found.</div>;
  }

  const post = categoryData.posts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Price: ${post.price}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}
