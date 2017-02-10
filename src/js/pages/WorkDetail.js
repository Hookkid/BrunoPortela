import React from "react"
import { IndexLink, Link } from "react-router"
import WorkComponent from "../components/Work"
import Slider from "react-slick"
export default class MyWork extends React.Component {
  render() {

    const WorksDetail =  [{
      title: "Document Tracking System",
      brief: "Create a system that allows the import/export company to track and manage the thousands of invoices they handle at any given time allowing their staff to update and attach relevant information as the import/export workflow proceeds.",
      solution: "A One Page App that can manipulate, filter or sort invoices and all of their inherited data (that included scanned PDF's) in real time. Relevant information was simultaneously fed to management and the final customer. Database was MSSQL while server side code was C#.NET. Good old javascript and jQuery were the choice for handling UI and fetching data.",
      images: ["esag1","esag2","esag3"]
    },{
      title: "End-client Dashboard",
      brief: "The client needed a way to relay live information to the end-customer in an unobtrusive manner.",
      solution: "A dashboard-type application that would present the end-user with crucial information at his convenience. They could choose which notification interested them and how they would be contacted. While the server was sitting in a Microsoft Server, the dashboard app runs in plain jQuery-aided javascript fetching data via a self-made REST API.",
      images: ["portal1","portal2"]
    },{
      title: "Spirit Beverage Hotsite",
      brief: "An old school maker of traditional Brazilian spirit 'Cachaça' wants to have a presence online. The first step is to make a Hotsite.",
      solution: "Slick, responsive design embracing the colors and spirit of the makers. A sober color pallet and stylish typesetting.",
      images: ["calambau1","calambau2","calambau3"]
    },{
      title: "Spirit Beverage eCommerce",
      brief: "An old school maker of traditional Brazilian spirit 'Cachaça' wants to have an online store selling their items alongside with other producers in the region.",
      solution: "A fast, responsive, full-fledged online store developed in cutting-edge technology. Using the powerful combination of React + MobX + Firebase we are able to achieve incredible performance. This is still work in progress.",
      images: ["notavailable"]
    },{
      title: "Health Food eStore",
      brief: "A health food producer wants to make their intricate packages and stand-alone products available for purchase online.",
      solution: "Mix and match. By allowing the user to peruse and pick while filling up the different packages I was able to deliver ease of purchase while maintaining the company's somewhat complex selling practices. Facebook was their main marketing venue - so cross-login/register integration was a must.",
      images: ["nutricao1","nutricao2","nutricao3"]
    },{
      title: "Restaurant POS",
      brief: "A local restaurant needs a Point of Sale that keeps his financial and sales records in check as well as aid in ordering and production.",
      solution: "A WinForm application elegantly handles the brief's needs. A local SQLEXPRESS engine runs the database in a couple of terminals simultaneously while monitors and printers in the kitchen keep the orders running on time.",
      images: ["bomgrado1"]
    }
    ]
     
    var currentWork = parseInt(this.props.location.query.workId)
    var nextWork = currentWork + 1
    var previousWork = currentWork - 1

    if(previousWork<0)
     previousWork=WorksDetail.length -1

    if(nextWork>=WorksDetail.length)
      nextWork=0
     
    if(currentWork<0)
     currentWork=0

    if(currentWork>WorksDetail.length-1)
      currentWork=0

    const slideImages = WorksDetail[currentWork].images.map(function(item, i){
      return <div key={i}><h3><img src={"img/" + item + ".jpg"} className="myFace img-responsive marginAuto" /></h3></div>
    })


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
            {slideImages}  
          
          </Slider>
        );
      }
    })

    return (

       <div className="workPage">
       <div className="container workDetail">
        <h1>{WorksDetail[currentWork].title}</h1>
        </div>
        <div className="page">
         <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-7">
            <h3>The brief:</h3>
            <p className="spill">{WorksDetail[currentWork].brief}</p>
            <h3>The solution:</h3>
            <p className="spill">{WorksDetail[currentWork].solution}</p>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5">
              <SimpleSlider/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <Link to="/WorkDetail" query={{ workId: previousWork }}><button type="button" className="btn btn-default"><i className="fa fa-arrow-left" aria-hidden="true"></i></button></Link><br/><br/>
            </div>
            <div className="col-xs-6 text-right">
              <Link to="/WorkDetail" query={{ workId: nextWork }}><button type="button" className="btn btn-default"><i className="fa fa-arrow-right" aria-hidden="true"></i></button></Link><br/><br/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <Link to="/myworks" ><button type="button" className="btn btn-default"><i className="fa fa-arrow-left" aria-hidden="true"></i> Back to works</button></Link><br/><br/>
            </div>
          </div>
          </div>
        </div>
        </div>
    );
  }
}
