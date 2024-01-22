import { createContext, useContext, useState } from "react";
import { data } from "../data";
import useLocalStorage from "../hooks/useLocalStorage";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useLocalStorage(data, "products");
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
export const useProducts = () => useContext(ProductContext);
