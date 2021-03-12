import { Switch, Route } from "react-router-dom";

import Navbar from "../../components/navbar";
import Home from "../home";

import withStyles from "./styles";

const App = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default withStyles(App);
