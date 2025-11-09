import { useMemo, useState } from "react";
import "./ProductCheckout.css";

const UNIT_PRICE = 1000;

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
}

export default function ProductCheckout() {
  const [quantity, setQuantity] = useState(1);

  const total = useMemo(() => quantity * UNIT_PRICE, [quantity]);

  return (
    <main className="checkout-page">
      <section className="checkout-card">
        <div className="checkout-header">
          <span className="checkout-icon" role="img" aria-label="shopping bag">
            🛍️
          </span>
          <div>
            <h1 className="product-title">Product: iPhone 15 Pro</h1>
            <p className="product-price">Price: {formatCurrency(UNIT_PRICE)}</p>
          </div>
        </div>

        <div className="checkout-body">
          <div className="quantity-control">
            <button
              type="button"
              className="quantity-button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              aria-label="Decrease quantity"
              disabled={quantity === 1}
            >
              −
            </button>
            <span className="quantity-value">{quantity}</span>
            <button
              type="button"
              className="quantity-button"
              onClick={() => setQuantity((prev) => prev + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <p className="total-label">
            Total: <span className="total-value">{formatCurrency(total)}</span>
          </p>
        </div>
      </section>
    </main>
  );
}
