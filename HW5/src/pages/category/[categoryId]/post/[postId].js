import Link from "next/link";
import { categories } from "../../../../../data";
import { useRouter } from "next/router";

export default function Post() {
    const router = useRouter();
    const { categoryId, postId } = router.query;


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

    const handleBackClick = () => {
        router.back();
    };

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content || "This is the post content."}</p>
            <li><Link href={`/category/${categoryId}`}>Back to Category</Link></li>
            <li><Link href="/">Go back to Home</Link></li>
        </>
    );
}