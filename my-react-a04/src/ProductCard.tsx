import React from "react";

export type ProductProps = {
  name: string;
  category: string;
  price: number;
  image: string;
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

function ProductCard({ name, category, price, image }: ProductProps) {
  return (
    <article className="card product-card h-100 border-0 shadow-lg overflow-hidden rounded-4">
      <div className="product-card__media">
        <img src={image} alt={name} className="product-card__image" />
        <span className="product-card__badge badge fw-semibold">{category}</span>
      </div>
      <div className="card-body product-card__body d-flex flex-column gap-3">
        <h3 className="card-title product-card__title">{name}</h3>
        <p className="product-card__price mb-0">{currencyFormatter.format(price)}</p>
        <button type="button" className="btn btn-primary w-100 rounded-pill fw-semibold mt-auto">
          View Details
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
