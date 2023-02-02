import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import ProductCard from "./ProductCard";
import ProductCardPC from "./ProductCardPC";
import useFetchData from "../../hooks/useFetchData";

export default function Products() {
  const theme = useTheme();
  const res = useMediaQuery(theme.breakpoints.down("md"));

  const { loading, result, error } = useFetchData(
    "http://localhost:1337/api/products?populate=*"
  );

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            sx={{ margin: "20px 4px 10px 4px" }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {result.data.map((product) => (
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
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
