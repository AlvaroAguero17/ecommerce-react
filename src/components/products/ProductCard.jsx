import { Link } from "react-router-dom";
import {
  Product,
  ProductAddToCart,
  ProductImage,
} from "../../styles/theme/products";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ product, res }) {
  return (
    <>
      <Link to={`product/${product.id}`} className="card-product">
        <Product>
          <ProductImage
            src={
              "http://localhost:1337" +
              product.attributes.images.data.attributes.formats.small.url
            }
          />

          <ProductInfo product={product} res={res} />
        </Product>
      </Link>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    </>
  );
}
