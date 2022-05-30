import "./ShopCard.scss";

export const ShopCard = ({ data }) => {
  const { name, price, image } = data;
  //   console.log(name);
  return (
    <div className="shop-card-container">
      <div
        className="shop-card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button className="button-add">ADD TO CARD</button>
      </div>
      <div className="shop-card-content">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};
