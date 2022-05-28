import { SignIn } from "./sign-in/SignIn";
import { SignUp } from "./sign-up/SignUp";

import "./Authenticate.scss";

export const Authentication = () => {
  return (
    <div className="authenticate-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
