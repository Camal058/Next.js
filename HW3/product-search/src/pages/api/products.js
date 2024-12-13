const products = [
    { id: 1, name: "Television", category: "Electronics", price: 30000, rating: 4 },
    { id: 2, name: "Shoes", category: "Cloth", price: 5000, rating: 5 },
    { id: 3, name: "Phone", category: "Electronics", price: 25000, rating: 3 }
  ];
  
  export default function handler(req, res) {
    const { category, minPrice, maxPrice, sort, page = 1, limit = 5, search } = req.query;
  
    let filteredProducts = products;
  
    if (category) {
      filteredProducts = filteredProducts.filter((p) => p.category === category);
    }
  
    if (minPrice) {
      filteredProducts = filteredProducts.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter((p) => p.price <= Number(maxPrice));
    }
  
    if (search) {
      filteredProducts = filteredProducts.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === "price" ? a.price - b.price : b.rating - a.rating
      );
    }
  
    const start = (page - 1) * limit;
    const end = start + Number(limit);
    const paginatedProducts = filteredProducts.slice(start, end);
  
    res.status(200).json({ products: paginatedProducts, total: filteredProducts.length });
  }
  