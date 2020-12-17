import React from "react";
import { InputText, Button } from "@aksara-ui/core";

import FormInput from "./../form-input/form-input.component";
import CustomButton from "./../custom-button/custom-button.component";

import { auth, SignInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
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
          {/* <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          /> */}
          <InputText
            name="email"
            type="email"
            label="email"
            onChange={this.handleChange}
            // handleChange={this.handleChange}
            value={this.state.email}
            placeholder="email"
            style={{ margin: "10px 0px" }}
            required
          />
          {/* <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          /> */}
          <InputText
            name="password"
            type="password"
            label="password"
            onChange={this.handleChange}
            // handleChange={this.handleChange}
            value={this.state.password}
            placeholder="password"
            style={{ margin: "10px 0px" }}
            required
          />
          <div className="buttons">
            {/* <CustomButton type="submit">Sign in</CustomButton> */}
            <Button
              type="submit"
              size={40}
              variant="outline"
            >
              Sign in
            </Button>
            <Button
              type="button"
              onClick={SignInWithGoogle}
              size={40}
              variant="primary"
              isGoogleSignIn
            >
              Sign in with Google
            </Button>
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
