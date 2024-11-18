import { useRouter } from 'next/router';
import Link from 'next/link';
import { categories } from '../../data/data';

export default function CategoryPage() {
  const router = useRouter();
  const { categoryId } = router.query;

  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {category.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/category/${categoryId}/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">Back to Categories</Link>
    </div>
  );
}
