import { useRouter } from 'next/router';
import Link from 'next/link';
import { categories } from '../../../data/data';

export default function PostPage() {
  const router = useRouter();
  const { categoryId, postId } = router.query;

  const category = categories.find((cat) => cat.id === categoryId);
  const post = category.posts.find((post) => post.id === postId);

  if (!category || !post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/category/${categoryId}`}>Back to Posts</Link>
    </div>
  );
}
