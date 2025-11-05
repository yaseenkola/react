function ProductListB() {
  let products = [
    {
      title: "Smartphone",
      price: 599,
      description: "Latest 5G smartphone with high-resolution camera.",
    },
    {
      title: "Laptop",
      price: 999,
      description: "Lightweight laptop with Intel i7 processor.",
    },
    {
      title: "Bluetooth Speaker",
      price: 49,
      description: "Portable speaker with deep bass and long battery life.",
    },
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-primary mb-3">Product Catalog</h3>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">
            <h5>{product.title}</h5>
            <p className="text-success fw-bold">AED {product.price}</p>
            <small className="text-muted">{product.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListB;
