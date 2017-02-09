import React from "react";

export default class Contact extends React.Component {
	constructor(){
	super()

	this.state = {name: ""}
}


 nameChange(e){
		this.setState({name: e.target.value})
	}


  render() {



	function sendEmail(){
		console.log(this.name)
	}
    return (
      <div className="container">
                <div className="row">
                   
                      
                     <div className="col-md-12" id="box">
                      <h2>Get in touch!</h2>
                      <p className="spill">I am always interested in hearing how you think a customized solution can help your business. Whether it is a matter of revamping a current system, or starting one from scratch - I'm up for the challenge!</p>
                            <hr/>
                                    <fieldset>
                                        <div className="form-group">

                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                                    <input name="first_name" value={this.state.name} onChange={this.nameChange} placeholder="Name" className="form-control" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                                    <input name="email" placeholder="E-Mail Address" className="form-control" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                                    <input name="phone" placeholder="(005)501-120101" className="form-control" type="text"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-md-12 inputGroupContainer">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                                    <textarea className="form-control" name="comment" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">

                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-warning pull-right" onClick={this.sendEmail}>Send <span className="glyphicon glyphicon-send"></span></button>
                                                <br/>
                                            </div>
                                        </div>

                                    </fieldset>
                    </div> 
</div></div>
    );
  }
}
