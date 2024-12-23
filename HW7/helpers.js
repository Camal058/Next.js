import { categories } from "@/data";

export const filterPosts = (filters) => {
  let filteredCategories = categories;

  if (filters.category !== "all") {
    filteredCategories = filteredCategories.filter(
      (category) => category.id === filters.category
    );
  }

  let filteredPosts = filteredCategories.flatMap((category) => category.posts);

  if (filters.search) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        post.content.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  filteredPosts = filteredPosts.filter(
    (post) => post.price >= filters.minPrice && post.price <= filters.maxPrice
  );

  if (filters.sort === "date") {
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (filters.sort === "price") {
    filteredPosts.sort((a, b) => a.price - b.price);
  }

  return filteredPosts;
};
