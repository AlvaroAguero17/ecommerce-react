import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductCardPC from "./ProductCardPC";

export default function Products() {
  const theme = useTheme();
  const res = useMediaQuery(theme.breakpoints.down("md"));

  const products = [
    {
      id: 1,
      name: "Taste of the wild",
      price: 23,
      description:
        "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/tow.png",
    },
    {
      id: 2,
      name: "Taste of the wild 2",
      price: 34,
      description:
        "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/tow.png",
    },
    {
      id: 3,
      name: "Taste of the wild 3",
      price: 25,
      description:
        "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/tow.png",
    },
    {
      id: 4,
      name: "Taste of the wild 4",
      price: 40,
      description:
        "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/tow.png",
    },
    {
      id: 5,
      name: "Taste of the wild 5",
      price: 30,
      description:
        "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/tow.png",
    },
    {
      id: 6,
      name: "Taste of the wild 6",
      price: 20,
      description:
        "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
      image: "/tow.png",
    },
  ];
  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {res ? (
        <ProductCard product={product} res={res} />
      ) : (
        <ProductCardPC product={product} res={res}></ProductCardPC>
      )}
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        sx={{ margin: "20px 4px 10px 4px" }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
