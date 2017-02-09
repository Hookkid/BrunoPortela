import "../css/style.css"
import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Info from "./pages/Info"
import MyWorks from "./pages/MyWorks"

import Contact from "./pages/Contact"

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="info" name="info" component={Info}></Route>
      <Route path="myworks(/:work)" name="work" component={MyWorks}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
    </Route>
  </Router>,
app)
