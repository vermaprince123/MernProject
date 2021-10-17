import React, { Component } from "react";
import axios from 'axios';
import Navbarprofilehere from "./navbarprofilehere";


const Record = (props) => (
  <tr>
    <td>{props.record.person_first_name}</td>
    <td>{props.record.person_last_name}</td>
    <td>{props.record.person_email}</td>
    <td>{props.record.person_mobile_number}</td>
  </tr>
);

export default class Navbarprofile extends Component {
  constructor(props) {
    super(props);
    //this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      //value:this.props.location.state,
      records: [],
      picture: false,
      src: false,
    };
  }

  handlePictureSelected(event) {
    var picture = event.target.files[0];
    var src = URL.createObjectURL(picture);

    this.setState({
      picture: picture,
      src: src
    });
  }

  renderPreview() {
    if (this.state.src) {
      return (
        <img src={this.state.src} />
      );
    } else {
      return (
        <p>
          
        </p>
      );
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/getalldata")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
        
      });
  }

  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
        />
      );
    });
    
  }

  render() {
    return (
      <>
      <Navbarprofilehere/>
        <div>
          <h3>Record List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>PersonEmail</th>
                <th>PersonMobileNumber</th>
              </tr>
            </thead>
            <tbody>{this.recordList()}</tbody>
          </table>
          <br />
        </div>
        <hr/>
        <input
          type="file"
          onChange={this.handlePictureSelected.bind(this)}
        />
        <div>
          {this.renderPreview()}
        </div>
      </>

    );
  }
}


