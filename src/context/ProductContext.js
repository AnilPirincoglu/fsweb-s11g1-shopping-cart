import { createContext, useContext, useState } from "react";
import { data } from "../data";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
export const useProducts = () => useContext(ProductContext);
