import { Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";

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
        <div>
          <h3>{product.data.attributes.name}</h3>
          <p>{quantity} total</p>
          <p>${quantity * product.data.attributes.price}</p>

          <Button>Remove</Button>
        </div>
      )}
    </>
  );
}
