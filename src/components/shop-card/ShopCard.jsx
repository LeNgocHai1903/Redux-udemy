import { useContext } from "react";

import { CartContext } from "../../context/cart";

import "./ShopCard.scss";

export const ShopCard = ({ data }) => {
  const { name, price, image } = data;

  const { changeQuantityOfItemToCard } = useContext(CartContext);
  return (
    <div className="shop-card-container">
      <div
        className="shop-card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button
          className="button-add"
          type="button"
          onClick={() => changeQuantityOfItemToCard(data, "increase")}
        >
          ADD TO CARD
        </button>
      </div>
      <div className="shop-card-content">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};
