import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";
import { useContext } from "react";

import { CartContext } from "../../context/cart";

import "./CartIcon.scss";

export const CartIcon = ({ ...rest }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-icon-container" {...rest}>
      <ShoppingCart className="cart-icon" />
      <span className="cart-icon-numbers">{cartItems.length}</span>
    </div>
  );
};
