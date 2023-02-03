import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { getProductById } from "../../hooks/useFetchData";
import CartProduct from "./CartProduct";

export default function ShoppingCart() {
  const { items, getTotal } = useContext(AppContext);
  const theme = useTheme();
  const res = useMediaQuery(theme.breakpoints.down("md"));
  let total = 0;

  const productsTotal = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div>
      <h2>Products: {productsTotal}</h2>
      {items.map((currentProduct, index) => (
        <CartProduct
          key={index}
          id={currentProduct.id}
          quantity={currentProduct.quantity}
        ></CartProduct>
      ))}
      <h1>Total = {getTotal()}</h1>
    </div>
  );
}
