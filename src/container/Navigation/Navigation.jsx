import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/images/crown.svg";

import "./Navigation.scss";

export const Navigation = () => {
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
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </nav>{" "}
      <Outlet />
    </>
  );
};
