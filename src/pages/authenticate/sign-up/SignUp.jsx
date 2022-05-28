import { Formik } from "formik";
import * as Yup from "yup";

import { Button } from "../../../components/button/Button";
import { FormInput } from "../../../components/form-input/FormInput";

import {
  createUserDocument,
  createAuthWithEmailAndPassword,
} from "../../../utils/firebase/firebase";

import "./SignUp.scss";

export const SignUp = () => {
  const initialValue = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopUp();
  //   createUserDocument(user);
  // };

  const signUpSchema = Yup.object().shape({
    displayName: Yup.string()
      .min(2, "Minimun 2 characters")
      .max(20, "Maximun 2 characters!")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const onSignUpSubmitHandler = async (values, actions) => {
    const { password, displayName } = values;

    try {
      const { user } = await createAuthWithEmailAndPassword(
        values.email,
        values.password
      );

      await createUserDocument(user, { displayName, password });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log(error.message);
    }
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={signUpSchema}
      onSubmit={onSignUpSubmitHandler}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <form className="sign-up-container" onSubmit={handleSubmit}>
          <h2>I do not have a account</h2>
          <p>Sign up with your email and password</p>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            value={values.displayName}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.displayName}
            errors={errors.displayName}
          />

          <FormInput
            type="text"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.email}
            errors={errors.email}
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
          />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.confirmPassword}
            errors={errors.confirmPassword}
          />

          <Button type="submit" buttonType="inverted">
            SIGN UP
          </Button>
        </form>
      )}
    </Formik>
  );
};
