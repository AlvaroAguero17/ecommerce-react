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
  const { addOneToCart, getProductQuantity, items } = useContext(AppContext);

  const productQuantity = getProductQuantity(product.id);

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
      <ProductAddToCart
        onClick={() => addOneToCart(product.id)}
        variant="contained"
      >
        Add to cart
      </ProductAddToCart>
    </>
  );
}
