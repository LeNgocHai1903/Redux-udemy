import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";

import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";

import { signOutAuth } from "../../utils/firebase/firebase";

import { CartIcon } from "../cart-icon/CartIcon";
import { CartDropdown } from "../cart-dropdown/CartDropdown";

import "./Navigation.scss";

export const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isToogle, setIsToogle } = useContext(CartContext);

  const signOut = async () => {
    await signOutAuth();
    setCurrentUser(null);
  };

  const toogleDropdown = () => {
    setIsToogle(!isToogle);
  };

  return (
    <>
      <nav className="navigation">
        <Link to="/">
          <CrownLogo className="logo" />
        </Link>

        <ul className="navigation-links-container">
          <li>
            <Link to="/shop">Shop</Link>
          </li>

          {currentUser ? (
            <li>
              <Link to="/" onClick={signOut}>
                Sign Out
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          )}

          <li>
            <CartIcon onClick={toogleDropdown} />
          </li>
        </ul>
        {isToogle ? <CartDropdown /> : <></>}
      </nav>{" "}
      <Outlet />
    </>
  );
};
