import {
  Product,
  ProductAddToCart,
  ProductImage,
} from "../../styles/theme/products";
import ProductInfo from "./ProductInfo";

export default function ProductCard({ product, res }) {
  return (
    <>
      <Product>
        <ProductImage src={product.images.img1} />
        <ProductInfo product={product} res={res} />
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
    </>
  );
}
