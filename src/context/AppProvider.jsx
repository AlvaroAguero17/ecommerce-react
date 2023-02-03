import { useEffect, useState } from "react";
import { createContext } from "react";
import { getProductById } from "../hooks/useFetchData";

export const AppContext = createContext({
  items: [],
});

export const AppProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  async function getTotal() {
    let total = 0;
    // await cartProducts.map((cartProduct) => {
    //   getProductById(cartProduct.id).then((productData) => {
    //     total += productData.data.attributes.price * cartProduct.quantity;
    //     console.log("dentro del map", total);
    //   });
    //   console.log("fuera", total);
    // });
    // return total;

    for (let i = 0; i < cartProducts.length; i++) {
      await getProductById(cartProducts[i].id).then((productData) => {
        total += productData.data.attributes.price * cartProducts[i].quantity;
        console.log("dentro del for", total);
      });
    }
    console.log("fuera del for", total);
    return total;
  }

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearch,
    setShowSearch,
    removeOneFromCart,
    deleteFromCart,
    addOneToCart,
    getProductQuantity,
    getTotal,
    items: cartProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
