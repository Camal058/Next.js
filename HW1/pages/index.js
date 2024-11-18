import Link from 'next/link';
import { categories } from '../data/data';

export default function HomePage() {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
