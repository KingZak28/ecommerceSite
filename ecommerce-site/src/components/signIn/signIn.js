import React from "react";
import FormInput from "../formInput/formInput";
import PrettyButton from "../prettyButton/prettyButton";
import { signInWithGoogle } from "../../firebase/firebaseUtils";
import "./signIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    // Dynamically update the state by pulling name and value off the event so if the name is email it will dynamically update the value with email
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signIn">
        <h2> I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          ></FormInput>
          <div className="buttons">
            <PrettyButton type="submit">Sign In</PrettyButton>
            <PrettyButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </PrettyButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
