import React from "react";

export default class Work extends React.Component {
  render() {
    const { title, clientName, roles, technologies, imageName } = this.props;

    return (
       <div className="col-md-4 col-sm-4 col-xs-12 profile_details">
        <div className="well profile_view clearfix">
          <div className="col-sm-12">
           <h2>{title}</h2>
            
            <div className="left col-xs-7">
             <h4 className="brief thinFont"><i>{clientName}</i></h4>
              <p>Roles:<br/>
              {roles}</p>                              
            </div>
            <div className="right col-xs-5 text-center">
              <img src={"img/" + imageName + ".jpg"} alt="" className="img-responsive"/>
            </div>
          </div>
          <div className="col-xs-12 bottom">
            <div className="col-xs-12 col-sm-9 emphasis thinFont">
              <p>
                Technologies Deployed:<br/>
                {technologies}
              </p>
            </div>
            <div className="col-xs-12 col-sm-3 emphasis text-right">
            <br/>
              <button type="button" className="btn btn-primary btn-xs">

                <i className="fa fa-user"> </i> See More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
