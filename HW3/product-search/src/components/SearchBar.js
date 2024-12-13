export default function SearchBar({ setFilters }) {
    const handleSearch = (e) => {
      setFilters((prev) => ({ ...prev, search: e.target.value, page: 1 }));
    };
  
    return (
      <input
        type="text"
        placeholder="Seach"
        onChange={handleSearch}
      />
    );
  }
  