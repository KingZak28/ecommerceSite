import React from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import "./signInAndUpPage.scss";

const SignInAndUpPage = () => (
  <div className="signInAndUp">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInAndUpPage;
