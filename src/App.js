import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import LandingPage from "pages/Landing";
import SignUpPage from "pages/SignUp";
import SignInPage from "pages/SignIn";
import ResetPasswordPage from "pages/ResetPassword";
import HomePage from "pages/Home";
import AccountPage from "pages/Account";
import AdminPage from "pages/Admin";

import * as ROUTES from "constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.RESET_PASSWORD} component={ResetPasswordPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default App;
