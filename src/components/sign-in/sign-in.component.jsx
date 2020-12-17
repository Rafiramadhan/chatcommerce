import React from "react";
import { InputText, Button } from "@aksara-ui/core";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

import { SignInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
            {/* <Button
              block={false}
              className="buttons"
              icon="google"
              iconPosition="left"
              onClick={SignInWithGoogle} 
              isGoogleSignIn
              variant="primary"
            >
              Sign in with Google 
            </Button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
