import "../css/main.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Info from "./pages/Info";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";


ReactDOM.render( 
    <AppContainer>
      <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="info(/:article)" name="info" component={Info}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    ReactDOM.render(
        <AppContainer>
          <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="info(/:article)" name="info" component={Info}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>
        </AppContainer>,
        document.getElementById('root')
    );
  });
}

