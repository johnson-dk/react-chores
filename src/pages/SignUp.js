import { React, Component } from "react";
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

import * as ROUTES from "constants/routes.js"

const SignUp = () => (
  <div>
    <Typography variant="h3" align="center" component="h1" gutterBottom>
      Sign Up
      <SignUpForm />
    </Typography>
  </div>
);

class SignUpForm extends Component {
  onSubmit = event => {

  }

  onChange = event => {

  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>

      </form>
    )
  }

}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link  to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)

export default SignUp;

export {SignUpForm, SignUpLink };
