import { signInWithGooglePopUp } from "../../../utils/firebase/firebase";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };
  return (
    <div>
      <h1>SIgn in page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};
