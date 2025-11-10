import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard, { ProductProps } from "./ProductCard";
import "./App.css";

const products: ProductProps[] = [
  {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "men's clothing",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    name: "Mens Casual Premium Slim Fit T-Shirts",
    category: "men's clothing",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
  {
    name: "Mens Cotton Jacket",
    category: "men's clothing",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  },
  {
    name: "Mens Casual Slim Fit",
    category: "men's clothing",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  },
  {
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    category: "jewelery",
    price: 695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  },
  {
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    category: "women's clothing",
    price: 56.99,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  },
];

const App: React.FC = () => {
  return (
    <div className="app-wrapper min-vh-100">
      <div className="container py-5">
        <header className="text-center text-white mb-5">
          <span className="badge rounded-pill bg-light text-dark px-3 py-2 fs-6 fw-semibold">
            Curated Picks
          </span>
          <h1 className="display-5 fw-bold mt-3 mb-3">Discover Your Next Favorite Piece</h1>
          <p className="lead mb-0 text-white-50">
            Hand-picked essentials crafted to wow every style enthusiast across the globe.
          </p>
        </header>

        <section className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <div className="col d-flex" key={product.name}>
              <ProductCard {...product} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
