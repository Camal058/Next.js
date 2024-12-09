import Link from 'next/link';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/categories');
  const categories = await res.json();

  return {
    props: { categories },
  };
}


export default function Home({ categories }) {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
