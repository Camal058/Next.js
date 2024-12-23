import React from "react";
import { useFilters } from "@/context/filtersContext";
import { filterPosts } from "@/helpers";

export default function CategoriesPage() {
  const { filters, setFilters } = useFilters();
  const filteredPosts = filterPosts(filters);

  return (
    <div>
      <h1>Categories</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={filters.search}
          onChange={(e) =>
            setFilters({ ...filters, search: e.target.value })
          }
        />
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        >
          <option value="date">Sort by Date</option>
          <option value="price">Sort by Price</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters({ ...filters, minPrice: Number(e.target.value) })
          }
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: Number(e.target.value) })
          }
        />
      </div>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Price: ${post.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
