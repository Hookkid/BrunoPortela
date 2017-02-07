import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div className="navSection">

        <Nav location={location} />

        <div style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
