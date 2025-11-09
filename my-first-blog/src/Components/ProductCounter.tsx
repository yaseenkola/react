import { useState } from "react";

function ProductCounter() {
  const price = 1000;
  const [quantity, setQuantity] = useState(3);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center text-gray-800">
      <div className="p-6 rounded-2xl shadow-lg bg-white border w-80">
        <h2 className="text-2xl font-semibold mb-2">
          🛍️ Product: <span className="font-bold">iPhone 15 Pro</span>
        </h2>
        <p className="text-lg mb-4">
          Price: <span className="font-medium">${price}</span>
        </p>

        <div className="flex items-center justify-center mb-4">
          <button
            onClick={decrease}
            className="px-4 py-2 text-2xl font-bold border rounded-xl hover:bg-gray-100"
          >
            −
          </button>
          <span className="mx-6 text-xl font-semibold">{quantity}</span>
          <button
            onClick={increase}
            className="px-4 py-2 text-2xl font-bold border rounded-xl hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <p className="text-xl">
          Total: <span className="font-bold">${price * quantity}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCounter;
