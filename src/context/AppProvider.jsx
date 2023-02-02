import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  const getProductById = async (id) => {
    const res = await fetch(
      `http://localhost:1337/api/products/${id}?populate=*`
    );
    const data = await res.json();

    setProduct(data);
    setLoading(false);
  };

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearch,
    setShowSearch,
    getProductById,
    product,
    loading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
