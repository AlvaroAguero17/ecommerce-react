import { Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import { getProductById } from "../../hooks/useFetchData";

export default function CartProduct({ id, quantity }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Grid container>
          <Grid item xs={2}>
            <img
              className="imgCart"
              src={
                "http://localhost:1337" +
                product.data.attributes.images.data.attributes.formats.small.url
              }
              alt=""
            />
          </Grid>
          <Grid item xs={10}>
            <h3>{product.data.attributes.name}</h3>
            <p>{quantity} total</p>
            <p>${quantity * product.data.attributes.price}</p>
            <Button>Remove</Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
