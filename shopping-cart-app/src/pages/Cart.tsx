import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import Navbar from '../components/Navbar';

// Cart page component - displays cart items and total
const Cart: React.FC = () => {
  const { cartItems, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const total = getTotalPrice();

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mb-4">
          <span style={{ marginRight: '10px' }}>🛒</span>
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="alert alert-info">
            Your cart is empty. <a href="/products">Continue Shopping</a>
          </div>
        ) : (
          <>
            {/* Cart Items Table */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.product.id}>
                      <td>{item.product.title}</td>
                      <td>
                        <div className="d-flex align-items-center justify-content-center">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control form-control-sm text-center mx-2"
                            style={{ width: '60px' }}
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 0)}
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${item.product.price.toFixed(2)}</td>
                      <td>${(item.product.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total and Action Buttons */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h4 className="mb-0">Total: ${total.toFixed(2)}</h4>
              <div>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => navigate('/products')}
                >
                  Continue Shopping
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate('/delivery-address')}
                >
                  Proceed to Address
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
