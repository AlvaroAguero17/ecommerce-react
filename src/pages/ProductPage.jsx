import { useState, useEffect, useContext } from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";

import MainImage from "../components/SingleProduct/MainImage";

import { getProductById } from "../hooks/useFetchData";

export const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Grid
          container
          spacing={1}
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          <Grid item sm={5}>
            <MainImage
              src={
                "http://localhost:1337" +
                product.data.attributes.images.data.attributes.url
              }
            />
          </Grid>

          <Grid item sm={6}>
            <Grid container direction="column" style={{ height: "100%" }}>
              <Typography variant="subtitle1">
                {product.data.attributes.category.data.attributes.name}
              </Typography>
              <Divider />
              <Box mt={2}>
                <Typography variant="h4">
                  {product.data.attributes.name}
                </Typography>
                <Typography variant="subtitle1">
                  {product.data.attributes.description}
                </Typography>

                <Typography variant="h5">
                  Price: {product.data.attributes.price}
                </Typography>
              </Box>
              <Button variant="contained" style={{ marginTop: "5px" }}>
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
