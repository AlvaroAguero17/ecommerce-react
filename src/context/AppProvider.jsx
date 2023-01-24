import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearch,
    setShowSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
