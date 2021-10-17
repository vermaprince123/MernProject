import React, { Component } from "react";
import axios from 'axios';
import Navbar from "../Navbar/navbar";
import Footer from "../footerfolder/footerfile";

export default class CreateRecord extends Component {

  constructor(props) {
    super(props);

    this.onChangePersonFirstName = this.onChangePersonFirstName.bind(this);
    this.onChangePersonLastName = this.onChangePersonLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePersonMobileNumber = this.onChangePersonMobileNumber.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_first_name: "",
      person_last_name: "",
      person_email: "",
      person_mobile_number: "",
      person_passwaord: "",
    };
  }

  onChangePersonFirstName(e) {
    this.setState({
      person_first_name: e.target.value,
    });
  }

  onChangePersonLastName(e) {
    this.setState({
      person_last_name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      person_email: e.target.value,
    });
  }
  onChangePersonMobileNumber(e) {
    this.setState({
      person_mobile_number: e.target.value,
    });
  }
  onChangePersonPassword(e) {
    this.setState({
      person_passwaord: e.target.value,
    });
  }


  onSubmit(e) {

    

    e.preventDefault();

    const newperson = {
      person_first_name: this.state.person_first_name,
      person_last_name: this.state.person_last_name,
      person_email: this.state.person_email,
      person_mobile_number: this.state.person_mobile_number,
      person_passwaord: this.state.person_passwaord,
    };

    axios
      .get("http://localhost:5000/insertdata/" + newperson.person_first_name + "/" + newperson.person_last_name
      + "/"+newperson.person_email+ "/"+newperson.person_mobile_number + "/" + newperson.person_passwaord)
      .then((response) => {
        if(response.data.person_email==newperson.person_email){
             alert("already account exist !!!")
        }else{
          alert("successfully created account !!")
        }
      }).then(this.setState({
        person_first_name:"",
        person_last_name:"",
        person_email:"",
       person_mobile_number:"",
       person_passwaord:""
      }))
  
  }

  render() {
    return (
      <>
        <Navbar />
        <div style={{ marginTop: 60 }, { backgroundColor: "lightgrey" }}>
          <h1 style={{ textAlign: "center" }}>Sing Up Here</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group" style={{ fontSize: "30px" }}>
              <label>First Name* </label>
              <input
                type="text"
                className="form-control"
                value={this.state.person_first_name}
                onChange={this.onChangePersonFirstName}
                required
                placeholder="first name"
              />
            </div>
            <div className="form-group" style={{ fontSize: "30px" }}>
              <label>Last Name* </label>
              <input
                type="text"
                className="form-control"
                value={this.state.person_last_name}
                onChange={this.onChangePersonLastName}
                required
                placeholder="last name"
              />
            </div>
            <div className="form-group" style={{ fontSize: "30px" }}>
              <label>Email* </label>
              <input
                type="email"
                className="form-control"
                value={this.state.person_email}
                onChange={this.onChangeEmail}
                required
                placeholder="email"
              />
            </div>
            <div className="form-group" style={{ fontSize: "30px" }}>
              <label>Mobile Number* </label>
              <input
                type="text"
                className="form-control"
                value={this.state.person_mobile_number}
                onChange={this.onChangePersonMobileNumber}
                required
                placeholder="mobile number"
              />
            </div>
            <div className="form-group" style={{ fontSize: "30px" }}>
              <label>Password* </label>
              <input
                type="password"
                className="form-control"
                value={this.state.person_passwaord}
                onChange={this.onChangePersonPassword}
                required
              />
            </div>
            <div className="form-group" style={{ fontSize: "30px" }}>
              <input
                type="submit"
                value="Click Here"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        <Footer/>
      </>
    );
  }
}