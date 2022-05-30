import { Formik } from "formik";
import * as Yup from "yup";
import {
  signInWithGooglePopUp,
  signInAuthWithEmailAndPassword,
} from "../../../utils/firebase/firebase";

import { Button } from "../../../components/button/Button";
import { FormInput } from "../../../components/form-input/FormInput";

import "./SignIn.scss";

export const SignIn = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
  });

  const signInwithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const onSignInSubmitHandler = async (event, values, actions) => {
    event.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(values.email, values.password);
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;

        default:
          console.log(e);
      }
    }
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={signInSchema}
      onSubmit={onSignInSubmitHandler}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <form className="sign-in-container" onSubmit={handleSubmit}>
          <h2>I already have an account</h2>
          <p>Sign in with your email and password</p>

          <FormInput
            type="text"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.email}
            errors={errors.email}
            transformLabel={false}
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            errors={errors.password}
            transformLabel={false}
          />

          <div className="button-group-container">
            <Button type="submit"> SIGN IN </Button>
            <Button
              type="button"
              buttonType="google"
              onClick={signInwithGoogle}
            >
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
