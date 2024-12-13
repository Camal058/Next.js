export default function Filters({ filters, setFilters }) {
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters((prev) => ({ ...prev, [name]: value, page: 1 }));
    };
  
    return (
      <div>
        <select name="category" onChange={handleFilterChange} value={filters.category}>
          <option value="">All category</option>
          <option value="Electronics">Electronics</option>
          <option value="Cloth">Cloth</option>
        </select>
  
        <input
          type="number"
          name="minPrice"
          placeholder="Minimum price"
          onChange={handleFilterChange}
          value={filters.minPrice}
        />
  
        <input
          type="number"
          name="maxPrice"
          placeholder="Maximum price"
          onChange={handleFilterChange}
          value={filters.maxPrice}
        />
  
        <select name="sort" onChange={handleFilterChange} value={filters.sort}>
          <option value="">No sorting</option>
          <option value="price">By price</option>
          <option value="rating">By rating</option>
        </select>
      </div>
    );
  }
  