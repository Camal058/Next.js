import Link from "next/link";
import { categories } from '/data'
export default function Home() {
    return (
        <>
            <h1>All Categories:</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link href={`/category/${category.id}`}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}