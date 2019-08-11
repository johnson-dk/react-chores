import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import * as ROUTES from "constants/routes";

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React Chores
          </Typography>
          <Button color="inherit" component={AdapterLink} to={ROUTES.LANDING}>
            Landing
          </Button>
          <Button color="inherit" component={AdapterLink} to={ROUTES.HOME}>
            Home
          </Button>
          <Button color="inherit" component={AdapterLink} to={ROUTES.ACCOUNT}>
            Account
          </Button>
          <Button color="inherit" component={AdapterLink} to={ROUTES.ADMIN}>
            Admin
          </Button>
          <Button color="inherit" component={AdapterLink} to={ROUTES.SIGN_IN}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
