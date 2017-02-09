import React from "react";
import { Link } from "react-router";
import { RouteTransition } from 'react-router-transition';
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

import presets from "../presets"

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div className="navSection">

        <Nav location={location} />

        <div style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              <RouteTransition
                pathname={this.props.location.pathname}
                {...presets.pop}
              >
                {this.props.children}
              </RouteTransition>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
