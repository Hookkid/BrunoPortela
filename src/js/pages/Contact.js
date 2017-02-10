import React from "react"
import $ from 'jquery'

export default class Contact extends React.Component {
  constructor(props){
    super(props)



    this.state = {name: "", email: "", phone: "", message: ""}

    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }


  nameChange(e){
    this.setState({name: e.target.value});
  }
  emailChange(e){
    this.setState({email: e.target.value});
  }
  phoneChange(e){
    this.setState({phone: e.target.value});
  }
  messageChange(e){
    this.setState({message: e.target.value});
  }



  sendEmail(){
    console.log(this.state.name)


$.ajax({
        type: "POST",
        url: "https://api:key-a66eae8a5626ce1732d1c3e72cf59d3b@api.mailgun.net/v3/mail.brunoportela.me/messages",
        data: { 'from': 'postmaster@mail.brunoportela.me', 'to': "bportela666@hotmail.com", 'subject': "Hello", 'text': "This is my email, man." },
        contentType: "application/json; charset=utf-8",
        cache: false,
        dataType: "json",
        success: function (res) {
            console.log(res);
        },
        failure: function (res) {
            alert(res.d);
        }
    });



//var domain = 'mydomain.mailgun.org';
//var mailgun = require('mailgun-js')({ apiKey: "YOUR API KEY", domain: domain });

  }

  render() {

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
                                                    <input name="email" value={this.state.email} onChange={this.emailChange} placeholder="E-Mail Address" className="form-control" type="text"/>
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
                    </div> 
</div></div>
    );
  }
}
