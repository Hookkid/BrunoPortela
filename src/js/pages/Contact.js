import React from "react"
import $ from 'jquery'

export default class Contact extends React.Component {
  constructor(props){
    super(props)



    this.state = {name: "", email: "", phone: "", message: ""}

    this.nameChange = this.nameChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.phoneChange = this.phoneChange.bind(this)
    this.messageChange = this.messageChange.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }


  nameChange(e){
    this.setState({name: e.target.value})
  }
  emailChange(e){
    this.setState({email: e.target.value})
  }
  phoneChange(e){
    this.setState({phone: e.target.value})
  }
  messageChange(e){
    this.setState({message: e.target.value})
  }

 validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  sendEmail(){

    $("#validation").hide()

    if(this.state.name==""){
      $("#validation").text("Please, tell us your name.")
      $("#validation").fadeIn()
      return
    }

     if(!this.validateEmail(this.state.email)){
      $("#validation").text("Please, give me a valid email address so I can reach you.")
      $("#validation").fadeIn()
      return
    }

     if(this.state.message==""){
      $("#validation").text("And what would you have to say?")
      $("#validation").fadeIn()
      return
    }
    
    const mailMessage = "YO! You got a hit from your site! " + this.state.name + " - " + this.state.email + " - " + this.state.phone + " - " + this.state.message

    $.ajax
    ({
      type: "GET",
      url: "http://grupoesag.com.br/v2/Ajax/sendEmail.aspx",
      data: { from: 'postmaster@mail.brunoportela.me', to: 'bportela666@hotmail.com', subject: 'Message from brunoportela.me', message: mailMessage },
      dataType: 'json',
      success: function (res){
        console.log(res)
      }
    });

    $("#fieldSet").hide()
    $("#successMail").fadeIn()


  }

  render() {

    return (
      <div className="container">
                <div className="row">
                   <div className="col-md-12" id="box">
                      <h2>Get in touch!</h2>
                      <p className="spill">I am always interested in hearing how you think a customized solution can help your business. Whether it is a matter of revamping a current system, or starting one from scratch - I'm up for the challenge!</p>
                            <hr/>
                              <fieldset id="fieldSet">
                                  <div className="form-group">

                                      <div className="col-md-12">
                                        <div className="alert alert-danger alert-dismissible" id="validation" role="alert">Please, state your name</div>

                                          <div className="input-group">
                                              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                              <input name="UserName" id="UserName" value={this.state.name} onChange={this.nameChange} placeholder="Name" className="form-control" type="text"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-group">

                                      <div className="col-md-12">
                                          <div className="input-group">
                                              <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                              <input name="email" id="email" value={this.state.email} onChange={this.emailChange} placeholder="E-Mail Address" className="form-control" type="text"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-group">

                                      <div className="col-md-12">
                                          <div className="input-group">
                                              <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                              <input name="phone" value={this.state.phone} onChange={this.phoneChange} placeholder="+55 61 3382-4656" className="form-control" type="text"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="form-group">

                                      <div className="col-md-12 inputGroupContainer">
                                          <div className="input-group">
                                              <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                                              <textarea className="form-control" value={this.state.message} onChange={this.messageChange} name="comment" placeholder="Message"></textarea>
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

                              <div className="well profile_view clearfix" id="successMail">
                              <h2>Thank you!</h2>
                              <hr/>
                              <div className="col-xs-12 col-md-8" id="box">
                              
                                <p>I will be very excited to get your message. I will get in touch as soon as humanly possible.</p>
                                <p><i><b>Excelsior!</b></i></p>
                              </div>
                              <div className="col-xs-12 col-md-4" id="box">
                              <img src="img/yes.gif" className="img-responsive" />
                              </div>
                                
                                
                              </div>
                            </div> 
                          </div>
                        </div>
    );
  }
}
