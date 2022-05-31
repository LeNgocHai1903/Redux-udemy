import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/button/Button";
import { CartDropdownItems } from "../../components/cart-dropdown-items/CartDropdownItems";

import { useOnClickOutside } from "../../hooks/useOutsideClick";

import { CartContext } from "../../context/cart";

import "./CartDropdown.scss";

export const CartDropdown = () => {
  const { cartItems, setIsToogle } = useContext(CartContext);
  const navigate = useNavigate();
  const ref = useRef(null);

  const directToCheckoutPage = () => {
    setIsToogle(false);
    navigate("/check-out");
  };

  useOnClickOutside(ref, () => setIsToogle(false));

  return (
    <div className="cart-dropdown-container" ref={ref}>
      <div className="cart-dropdown-items">
        <ul>
          {cartItems.map((cart) => (
            <li key={cart.id}>
              <CartDropdownItems cart={cart} />
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-dropdown-footer">
        <Button
          type="button"
          buttonType="reverted"
          onClick={directToCheckoutPage}
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};
