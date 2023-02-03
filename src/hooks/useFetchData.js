import { useState, useEffect } from "react";

export default function useFetchData(url) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { loading, result, error };
}

export const getProductById = async (id) => {
  const res = await fetch(
    `http://localhost:1337/api/products/${id}?populate=*`
  );
  const data = await res.json();

  return data;
};
