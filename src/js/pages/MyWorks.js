import React from "react";

import WorkComponent from "../components/Work";

export default class MyWork extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { Work } = params;
    const { date, filter } = query;

    const Works =  [{
      title: "Document Tracking System",
      clientName: "ESAG Group",
      roles: "Code / Design / DB",
      technologies: "C#.NET / MSSQL / jQuery",
      imageName: "esag1"
    },{
      title: "End-client Dashboard",
      clientName: "ESAG Group", 
      roles: "Code / Design / DB", 
      technologies: "REST / Bootstrap / jQuery",
      imageName: "portal1"
    },{
      title: "Spirit Beverage Hotsite",
      clientName: "Cachaças de Calambau",
      roles: "Code / Design",
      technologies: "React / Bootstrap", 
      imageName: "calambau1"
    },{
      title: "Spirit Beverage eCommerce",
      clientName: "Cachaças de Calambau",
      roles: "Code / Design / DB",
      technologies: "React / MobX / Firebase",
      imageName: "calambau2"
    },{
      title: "Health Food eStore",
      clientName: "Qualidade Nutrição",
      roles: "Code / Design / DB",
      technologies: "C#.NET / MSSQL / jQuery",
      imageName: "nutricao1"
    },{
      title: "Simple POV",
      clientName: "Local Restaurant", 
      roles: "Code / Design / DB", 
      technologies: "C# / MSSQL / WinForms", 
      imageName: "portal2"}
    ].map((mappedObject, i) => <WorkComponent key={i} title={mappedObject.title} clientName={mappedObject.clientName} roles={mappedObject.roles} technologies={mappedObject.technologies} imageName={mappedObject.imageName}/> );




    
    
      
    
   
    return (

       <div className="container">
       <div className="row">

              <div className="col-md-12">
                <h2>My recent works</h2>
                <p className="spill">I have worked all sorts of different projects. These are the most recent ones. Most of them have their source code available at my GitHub.</p>
                <hr/>
                <div className="x_panel">
                  <div className="x_content">
                    <div className="row">
                      <div className="clearfix"></div>


                     
                      {Works}



                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}
