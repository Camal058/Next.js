import { useState, useEffect } from "react";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

export default function ProductsPage({ initialData }) {
  const [products, setProducts] = useState(initialData.products);
  const [total, setTotal] = useState(initialData.total);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    sort: "",
    search: "",
    page: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(filters).toString();
      const res = await fetch(`/api/products?${params}`);
      const data = await res.json();
      setProducts(data.products);
      setTotal(data.total);
    };

    fetchData();
  }, [filters]);

  return (
    <div>
      <h1>Products</h1>
      <SearchBar setFilters={setFilters} />
      <Filters filters={filters} setFilters={setFilters} />
      <ProductList products={products} />
      <div>
        {Array.from({ length: Math.ceil(total / 5) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setFilters((prev) => ({ ...prev, page: index + 1 }))}
            style={{ margin: "0 5px" }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();
  return { props: { initialData: data } };
}
