import { Box, Typography } from "@mui/material";
import { Banner } from "../components/banner/Banner";
import Offers from "../components/offers/Offers";
import Products from "../components/products/Products";

export const IndexPage = () => {
  return (
    <>
      <Banner />
      <Offers />
      <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
        <Typography variant="h4">New Products</Typography>
      </Box>
      <Products />
    </>
  );
};
