import React, { Component } from "react";
import axios from 'axios';
import Navbar from "../Navbar/navbar";
import Footer from "../footerfolder/footerfile";
import {withRouter } from "react-router-dom";


class Loginrecord extends Component {

  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      person_email: "",
      person_passwaord: ""
    };


  }

  onChangeEmail(e) {
    this.setState({
      person_email: e.target.value,
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
      person_email: this.state.person_email,
      person_passwaord: this.state.person_passwaord,
    };

    axios.get("http://localhost:5000/loginvalue/" + newperson.person_email + "/" + newperson.person_passwaord)
      .then((response) => {

        if (response.data.person_email == newperson.person_email) {
          this.props.history.push({pathname:"/profile", state:response.data});
        } else {
          alert("invalid credentials!!")
        }
      })

  }

  render() {
    return (
      <>
        <Navbar />
        <div style={{ marginTop: 60 }, { backgroundColor: "lightgrey" }}>
          <h1 style={{ textAlign: "center" }}>Login Here</h1>
          <form onSubmit={this.onSubmit} >
            <div className="form-group" style={{ fontSize: "30px" }}>
              <label>Email* </label>
              <input
                type="text"
                className="form-control"
                value={this.state.person_email}
                onChange={this.onChangeEmail}
                required
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

export default withRouter(Loginrecord);















