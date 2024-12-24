"use client";

import { useEffect, useState } from 'react';
import { Book, Category } from '@/entities/book'; // Assuming the Category type is imported
import axios from 'axios';

export default function AllBooksPage() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBooks() {
            const res = await axios.get("http://localhost:3000/api");
            setBooks(res.data);
            setLoading(false);
        }
        fetchBooks();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>All Books</h1>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const form = new FormData(e.target as HTMLFormElement);
                    const title = form.get('title') as string;
                    const category = form.get('category') as Category;
                    const author = form.get('author') as string;
                    const publicationDate = form.get('publicationDate') as string;
                    const price = parseFloat(form.get('price') as string);


                    const res = await fetch('/api/books', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            title,
                            category,
                            author,
                            publicationDate,
                            price,
                        }),
                    });

                    const newBook = await res.json();
                    setBooks([...books, newBook]);
                }}
            >
                <input name="title" type="text" placeholder="Book Title" required />
                <input name="category" type="text" placeholder="Category" required />
                <input name="author" type="text" placeholder="Author" required />
                <input name="publicationDate" type="date" placeholder="Publication Date" required />
                <input name="price" type="number" step="0.01" placeholder="Price" required />
                <button type="submit">Add Book</button>
            </form>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} - ({book.category}) {book.author} - {book.price}$
                    </li>
                ))}
            </ul>
        </div>
    );
};