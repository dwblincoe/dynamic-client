import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Navbar from "../../components/navbar";
import Home from "../home";
import LoginRegister from "../login-register";

import withStyles from "./styles";

const App = ({ auth, classes }) => {
  return (
    <div className={classes.container}>
      {auth && <Navbar />}
      <Switch>
        <Route exact path="/" render={() => auth ? <Home /> : <LoginRegister />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(withStyles(App));
