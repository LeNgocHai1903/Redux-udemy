import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";

import "./CartIcon.scss";

export const CartIcon = ({...rest}) => {
  return (
    <div className="cart-icon-container" {...rest}>
      <ShoppingCart className="cart-icon"/>
      <span className="cart-icon-numbers">0</span>
    </div>
  );
};
