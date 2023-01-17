import { useState } from "react";
import {
  Product,
  ProductAddToCart,
  ProductImage,
} from "../../styles/theme/products";
import ProductInfo from "./ProductInfo";

export default function ProductCardPC({ product, res }) {
  const [showButton, setShowButton] = useState(false);

  const handleonMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <>
      <Product
        onMouseEnter={handleonMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProductImage src={product.image} />
        {showButton && (
          <ProductAddToCart show={showButton} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}
        <ProductInfo product={product} res={res} />
      </Product>
    </>
  );
}
