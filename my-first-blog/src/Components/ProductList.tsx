import "./ProductCard.css";

type Product = {
  name: string;
  detailsPage: string;
  description: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    name: "iPhone 15 Pro",
    detailsPage:
      "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
    description:
      "Apple today debuted iPhone 15 Pro and iPhone 15 Pro Max, crafted with aerospace-grade titanium for ultimate durability and performance.",
    price: 999.99,
    image:
      "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large_2x.jpg",
  },
{
  name: "Samsung Galaxy S24 Ultra",
  detailsPage: "https://www.samsung.com/global/galaxy/galaxy-s24-ultra/",
  description: "The Galaxy S24 Ultra redefines smartphone power with AI integration, a 200MP camera, and a stunning titanium body.",
  price: 1199.99,
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Samsung_Galaxy_S24_Ultra.jpg/560px-Samsung_Galaxy_S24_Ultra.jpg",
},
{
  name: "Google Pixel 8 Pro",
  detailsPage: "https://store.google.com/in/product/pixel_10_pro_fold?hl=en-IN",
  description: "Pixel 8 Pro brings advanced AI-powered photography, Google Tensor G3 performance, and a sleek matte finish.",
  price: 999.0,
  image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Google_Pixel_8_Pro.jpg",
},
];

function ProductList() {
  return (
    <div className="container my-4">
      <h2 className="text-center text-primary mb-4">Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.name}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-warning">{product.name}</h4>
                <h6 className="card-subtitle mb-2 text-secondary">
                  Price: ${product.price.toFixed(2)}
                </h6>
                <p className="card-text flex-grow-1">{product.description}</p>
                <a
                  href={product.detailsPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto w-100"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
