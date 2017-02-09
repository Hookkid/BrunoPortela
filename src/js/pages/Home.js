import React from "react";

export default class Home extends React.Component {
  render() {
    return (
    
        <div className="container">
          <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12">
            <div className="siteLayer">     
              <h1 className="floatLayer">Hello!</h1>
              <h2 className="willIam">I am <b>Bruno Portela</b>, a front end developer specialized in super fast, real-time, interactive database applications.</h2>
              <div className="">
                <p className="spill">I have been coding professionally for over 15 years <s>all over the world</s> mostly in Australia and Brazil.
                  Some of the biggest companies I worked for would be <a href="http://www.aipc.net.au/" target="_blank">The Australian Institute of Professional Counsellors</a> and the <a href="http://www.thinkpharmacy.com.au/">Think Pharmacy Group</a>.
                  I also worked for renowned Brisbane web agency <a href="http://www.greenhat.net/" target="_blank">Green Hat</a> a while back.
                </p>
                <p className="spill">
                  I am now focused in developing medium-to-large-scale applications using cutting-edge technologies like <b>REACT</b> and <b>Google's Firebase</b>. I'm really excited about what these technologies are capable of and can't wait to hear about your project!
                </p>

                <div className="contactIcons">
                  <div className="row">

                    <a href="https://github.com/TOYLTH" target="_blank"><img src="/img/svg/github-icon.svg" alt="My Git Hub Account" width="42px" className="marginLeft12"/></a>
                    <a href="https://www.facebook.com/toylth" target="_blank"><img src="/img/svg/facebook.svg" alt="My Facebook Account" width="42px" className="marginLeft12"/></a>
                    <a href="https://www.linkedin.com/in/bruno-portela-83508a138" target="_blank"><img src="/img/svg/LinkedIn.png" alt="My LinkedIn Account" height="42px" className="marginLeft12" /></a>
                  </div>  
                </div>
              </div>
            
        </div></div></div>
      </div>
    );
  }
}
