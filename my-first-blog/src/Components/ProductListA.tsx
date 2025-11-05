function ProductListA() {
  let products = [
    "Smartphone",
    "Laptop",
    "Wireless Headphones",
    "Smartwatch",
    "Bluetooth Speaker",
    "Gaming Console",
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-success mb-3">Available Products</h3>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListA;
