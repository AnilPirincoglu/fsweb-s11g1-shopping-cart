import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

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
