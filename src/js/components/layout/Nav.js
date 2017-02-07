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

  //const collapsed = !this.state.collapsed
    //this.setState({collapsed})

  }

  render() {
    const { location } = this.props
    const { collapsed } = this.state
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : ""

    return (




<div>






<nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      
    </div>

    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li>
          <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}  data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <div className="svg-wrapper">
            <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
              <rect id="shape" height="40" width="150" />
              <div id="text">
              <div className="menuItem"><span className="spot"></span>Home</div>
              </div>
            </svg>
          </div>
        </IndexLink>
        </li>
        <li>
          <Link to="info" onClick={this.toggleCollapse.bind(this)} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <div className="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <div id="text">
         <div className="menuItem"><span className="spot"></span>Info</div>
        </div>
      </svg>
    </div>
    </Link>
    </li>     
    <li>
    <Link to="settings" onClick={this.toggleCollapse.bind(this)} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <div className="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <div id="text">
          <div className="menuItem"><span className="spot"></span>Contact</div>
        </div>
      </svg>
    </div>
          
  </Link>    
    </li>   
      </ul>
    </div>
  </div>
</nav>


              
        </div>
    );
  }
}
