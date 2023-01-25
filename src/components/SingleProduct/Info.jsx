import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Info({ title, description, price, category, stock }) {
  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      <Typography variant="subtitle1">{category}</Typography>
      <Divider />
      <Box mt={2}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>

        <Typography variant="h5">Price: {price}</Typography>
      </Box>
      <Button variant="contained" style={{ marginTop: "5px" }}>
        Add to cart
      </Button>
    </Grid>
  );
}
