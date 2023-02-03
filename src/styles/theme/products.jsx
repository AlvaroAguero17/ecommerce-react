import { Button, IconButton } from "@mui/material";
import { styled, Box } from "@mui/system";
import { slideInBottom } from "../../animation/animations";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "250px",
  height: "350px",
  background: "#E4EADE",
  padding: "10px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "200px",
    height: "300px",
    padding: "10px",
  },
}));

export const ProductAddToCart = styled(Button)(() => ({
  width: "120px",
  fontSize: "12px",
  background: "#A8D7C3",
  opacity: 0.9,
}));

export const ProductInfoWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
