import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../containers/App";
import Test from "../containers/Test";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/:filter?" component={App} />
        <Route exact path="/test" component={Test} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
