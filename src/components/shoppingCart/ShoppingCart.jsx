import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { getProductById } from "../../hooks/useFetchData";
import CartProduct from "./CartProduct";

export default function ShoppingCart() {
  const { items } = useContext(AppContext);
  const theme = useTheme();
  const res = useMediaQuery(theme.breakpoints.down("md"));

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let productExt = [];
    for (let i = 0; i < items.length; i++) {
      await getProductById(items[i].id).then((product) => {
        productExt.push({
          name: product.data.attributes.name,
          price: product.data.attributes.price,
          quantity: items[i].quantity,
          total: items[i].quantity * product.data.attributes.price,
        });
      });
    }
    setProducts(productExt);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productsTotal = items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const priceTotal = products.reduce((sum, product) => sum + product.total, 0);

  return (
    <Box alignItems={"center"}>
      <h2>Products: {productsTotal}</h2>

      {items.map((currentProduct, index) => (
        <CartProduct
          key={index}
          id={currentProduct.id}
          quantity={currentProduct.quantity}
        ></CartProduct>
      ))}

      <h2>Total {priceTotal.toFixed(2)}</h2>
      <Button>Buy cart</Button>
    </Box>
  );
}
