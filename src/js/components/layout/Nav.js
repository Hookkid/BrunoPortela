import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
                </li>
                <li>
                  <Link to="info" onClick={this.toggleCollapse.bind(this)}>Info</Link>
                </li>
                <li>
                  <Link to="myworks" onClick={this.toggleCollapse.bind(this)}>My Works</Link>
                </li>
                <li>
                  <Link to="contact" onClick={this.toggleCollapse.bind(this)}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
