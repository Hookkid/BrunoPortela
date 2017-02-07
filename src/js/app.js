import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Info from "./pages/Info";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const root = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="info(/:article)" name="info" component={Info}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
root);
