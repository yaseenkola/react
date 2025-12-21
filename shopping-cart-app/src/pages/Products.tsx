import React from 'react';
import { useCart } from '../CartContext';
import { products } from '../data';
import Navbar from '../components/Navbar';

// Products page component - displays all products in a grid
const Products: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mb-4">Our Products</h2>
        
        {/* Product Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card h-100">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.title}
                  style={{ height: '300px', objectFit: 'contain', padding: '20px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-muted text-uppercase" style={{ fontSize: '0.8rem' }}>
                    {product.category}
                  </h6>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <p className="card-text">
                      <strong>${product.price.toFixed(2)}</strong>
                    </p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
