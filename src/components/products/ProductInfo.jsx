import { Typography } from "@mui/material";
import { ProductInfoWrapper } from "../../styles/theme/products";

export default function ProductInfo({ product, res }) {
  return (
    <ProductInfoWrapper>
      <Typography variant={res ? "h6" : "h5"} lineHeight={2}>
        {product.attributes.name}
      </Typography>
      <Typography variant={res ? "caption" : "body1"}>
        ${product.attributes.price}
      </Typography>
    </ProductInfoWrapper>
  );
}
