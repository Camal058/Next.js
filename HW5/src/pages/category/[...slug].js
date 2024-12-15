import { useRouter } from "next/router";
import Link from "next/link";
import { categories } from "../../../data";

export default function CatchAll() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug || slug.length < 2) {
        return (
            <div>
                <h1>Page not found</h1>
                <Link href="/">Go back to Home</Link>
            </div>
        );
    }

    const [categoryId, postId] = slug;
    const category = categories.find((cat) => cat.id === categoryId);

    if (!category) {
        return (
            <div>
                <h1>Category not found</h1>
                <Link href="/">Go back to Home</Link>
            </div>
        );
    }

    const post = category.posts.find((p) => p.id === postId);
    
    if (!post) {
        return (
            <div>
                <h1>Post not found</h1>
                <Link href={`/category/${categoryId}`}>Go back to Category</Link>
            </div>
        );
    }

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href={`/category/${categoryId}`}>Back to Category</Link>
        </>
    );
}