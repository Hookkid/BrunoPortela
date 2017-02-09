import React from "react"
import { IndexLink, Link } from "react-router"
import WorkComponent from "../components/Work"
import Slider from "react-slick"
export default class MyWork extends React.Component {
  render() {

    

const SimpleSlider = React.createClass({
  render: function () {
    const settings = {
      arrows: false,
      dots: true,
      draggable: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6500,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><h3><img src="img/esag1.jpg" className="myFace img-responsive marginAuto" /></h3></div>
        <div><h3><img src="img/esag2.jpg" className="myFace img-responsive marginAuto" /></h3></div>
        <div><h3><img src="img/esag3.jpg" className="myFace img-responsive marginAuto" /></h3></div>
      </Slider>
    );
  }
});
   
    return (

       <div className="workPage">
       <div className="container workDetail">
        <h1>Document Tracking System</h1>
        </div>
        <div className="page">
         <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-7">
              <h3 className="spill"><b>The brief:</b> Create a system that allows the import/export company to track and manage  the thousands of invoice they handle at any given time allowing their staff to update and attach relevant information as the import/export workflow proceeds.</h3>
            <p className="spill"><b>The solution:</b> I developed a One Page App that could create, filter or sort the invoice and all of their inherited data (that included scanned PDF's) in real time. Relevant information was constantly fed to management and the final customer.</p>
            <p className="spill">Database was MSSQL while server side code was C#.NET. Good old javascript and jQuery were the choice for handling UI and fetching data.</p>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5">
              <SimpleSlider/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-7">
              <Link to="myworks"><button type="button" className="btn btn-default">Back to works...</button></Link>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7">
            </div>
          </div>
          </div>
        </div>
        </div>
    );
  }
}
