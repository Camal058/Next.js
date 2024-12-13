export default function ProductList({ products }) {
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))}
      </div>
    );
  }
  