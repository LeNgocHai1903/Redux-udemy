import "./CartDropdown.scss";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
        <div className="cart-dropdown-items">
            <ul>
                <li>items 1</li>
            </ul>
        </div>
      <div className="cart-dropdown-footer">
        <button>CHECKOUT</button>
      </div>
    </div>
  );
};
