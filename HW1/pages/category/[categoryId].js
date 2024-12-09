import Link from 'next/link';

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3001/categories');
  const categories = await res.json();

  const paths = categories.map((category) => ({
    params: { categoryId: category.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const categoryRes = await fetch(`http://localhost:3001/categories/${params.categoryId}`);
  const category = await categoryRes.json();

  const postsRes = await fetch(`http://localhost:3001/posts?categoryId=${params.categoryId}`);
  const posts = await postsRes.json();

  return {
    props: { category, posts },
  };
}


export default function Category({ category, posts }) {
  return (
    <div>
      <h1>Category: {category.name}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/category/${category.id}/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
