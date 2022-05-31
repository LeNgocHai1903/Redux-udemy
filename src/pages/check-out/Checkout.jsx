import { useContext } from "react";

import { CartContext } from "../../context/cart";

import { FiDelete } from "react-icons/fi";
import { GrPrevious, GrNext } from "react-icons/gr";

import "./Checkout.scss";

export const Checkout = () => {
  const {
    cartItems,
    changeQuantityOfItemToCard,
    deleteItemInCard,
    totalPrice,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <ul>
        <li className="checkout-list">
          <p>Product</p>
          <p>Name</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Remove</p>
        </li>
        {cartItems.map((cart) => (
          <li className="checkout-list" key={cart.id}>
            <div
              className="checkout-item-image"
              style={{ backgroundImage: `url(${cart.image})` }}
            />
            <p>{cart.name}</p>
            <div className="checkout-quantity">
              <GrPrevious
                onClick={() => changeQuantityOfItemToCard(cart, "decrease")}
              />
              {cart.quantity}
              <GrNext
                onClick={() => changeQuantityOfItemToCard(cart, "increase")}
              />
            </div>
            <p>{cart.price}</p>
            <FiDelete
              size={25}
              color="red"
              onClick={() => deleteItemInCard(cart)}
            />
          </li>
        ))}
      </ul>
      <div className="checkout-total-price">TOTAL: {totalPrice}$</div>
    </div>
  );
};
