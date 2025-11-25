import { useState } from "react";

// Structure of each product returned by the API
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

const ProductSearch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [noResults, setNoResults] = useState(false);

  const fetchProducts = async () => {
    try {
      setError(null);
      setNoResults(false);

      const apiUrl = `https://dummyjson.com/product/search?q=${searchTerm}`;
      console.log(apiUrl);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      if (!data.products || data.products.length === 0) {
        setNoResults(true);
      }

      setProducts(data.products || []);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1 className="text-danger fw-bold mb-4">Product Search</h1>

      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search products (e.g. Phone, Shoes, Watch)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={fetchProducts}>
          Search
        </button>
      </div>

      {/* Show error */}
      {error && <h4 className="text-danger">{error}</h4>}

      {/* No results message */}
      {noResults && <h4 className="text-warning">No products found.</h4>}

      <div className="row mt-4">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card h-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
              />

              <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold text-success">Price: ${product.price}</p>
              </div>

              <div className="card-footer">View Details</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
