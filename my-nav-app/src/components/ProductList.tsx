import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await response.json();
    setProducts(data);
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product List</h2>

      <button className="btn btn-primary mb-4" onClick={fetchProducts}>
        Fetch Products
      </button>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top p-3"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  AED {product.price}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
