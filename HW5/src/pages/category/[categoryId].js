import Link from "next/link";
import { useRouter } from "next/router";
import { categories } from "../../../data";

export default function Category() {
    const router = useRouter();
    const { categoryId } = router.query;

    const category = categories.find((cat) => cat.id === categoryId);
    console.log("category ", category);

    if (!category) {
        return (
            <div>
                <h1>Category not found</h1>
                <Link href="/">Go back to Home</Link>
            </div>
        );
    }

    return (
        <>
            <h1>Category: {category.name}</h1>
            <ul>
                <h2>Posts</h2>
                {category.posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/category/${categoryId}/post/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/">Go back to Home</Link>
        </>
    );
}