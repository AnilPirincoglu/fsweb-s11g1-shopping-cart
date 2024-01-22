import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage([], "cart");

  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const removeItem = (index) => {
    setCart(cart.filter((item, cartIndex) => cartIndex !== index));
  };

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
