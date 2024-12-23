import { categories } from "@/data";

export default function CategoryPage({ params }) {
  const category = categories.find((cat) => cat.id === params.category);

  if (!category) {
    return <div>Category not found.</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {category.posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
