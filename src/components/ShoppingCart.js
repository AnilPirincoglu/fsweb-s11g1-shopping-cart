import React from "react";
import { ScCartCheckout } from "./scParts";

// Components
import Item from "./ShoppingCartItem";
import { useCart } from "../context/CartContext";

const ShoppingCart = (props) => {
  const { cart, getCartTotal } = useCart();

  return (
    <div>
      {cart.map((item, order) => (
        <Item key={`${item.id}${order}`} order={order} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
