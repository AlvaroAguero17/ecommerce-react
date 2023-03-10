import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import { IndexPage } from "./pages/IndexPage";
import { ProductPage } from "./pages/ProductPage";
import { SearchPage } from "./pages/SearchPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<IndexPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
