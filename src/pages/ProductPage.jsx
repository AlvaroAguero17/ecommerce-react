import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import ImageGrid from "../components/SingleProduct/ImageGrid";
import Info from "../components/SingleProduct/Info";
import MainImage from "../components/SingleProduct/MainImage";

const images = ["/tow.png", "/tow.png"];

const product = {
  title: "Taste of the wild",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum fugit quidem",
  price: "$1200",
  category: "Cat food",
  stock: 10,
};

export const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <Grid container spacing={1} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Grid item sm={1}>
          <ImageGrid
            images={images}
            onSelect={setSelectedImage}
            selectedImage={selectedImage}
          />
        </Grid>
        <Grid item sm={5}>
          <MainImage src={images[selectedImage]} />
        </Grid>
        <Grid item sm={6}>
          <Info {...product} />
        </Grid>
      </Grid>
    </div>
  );
};
