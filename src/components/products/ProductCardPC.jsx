import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import {
  Product,
  ProductAddToCart,
  ProductImage,
} from "../../styles/theme/products";
import ProductInfo from "./ProductInfo";

export default function ProductCardPC({ product, res }) {
  const {} = useContext(AppContext);

  const [showButton, setShowButton] = useState(false);

  const handleonMouseEnter = () => {
    setShowButton(true);
  };
  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <>
      <Link to={`product/${product.id}`} className="card-product">
        <Product
          onMouseEnter={handleonMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ProductImage
            src={
              "http://localhost:1337" +
              product.attributes.images.data.attributes.formats.small.url
            }
          />
          {showButton && (
            <ProductAddToCart show={showButton} variant="contained">
              Add to cart
            </ProductAddToCart>
          )}
          <ProductInfo product={product} res={res} />
        </Product>
      </Link>
    </>
  );
}
