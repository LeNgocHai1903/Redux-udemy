import "./CartDropdownItems.scss";

export const CartDropdownItems = ({ cart }) => {
  return (
    <div className="cart-dropdown-item-container">
      <div
        className="cart-dropdown-item-image"
        style={{ backgroundImage: `url(${cart.image})` }}
      />
      <div className="cart-dropdown-item-content">
        <h3>{cart.name}</h3>
        <span>{cart.quantity} * {cart.price} $</span>
      </div>
    </div>
  );
};
