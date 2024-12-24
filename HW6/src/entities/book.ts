export type Category =
    | 'Fiction'
    | 'Non-Fiction'
    | 'Science'
    | 'History'
    | 'Biography'
    | 'Fantasy'
    | 'Romance'
    | 'Thriller';

export interface Book {
    id: string;
    title: string;
    category: Category | string;
    author: string;
    publicationDate: string;
    price: number;
};