import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateRecord from "./singupfoler/createrecord";
import Navbar from "./Navbar/navbar";
import Aboutcompany from "./aboutcompany/aboutcompany";
import Login from "./loginfolder/loginpage";
import Navbarprofile from "./profile/navbarprofile";


function App() {
  return (
    <div>

      <Router>

        <Route exact path="/">
          <Navbar />
          <Aboutcompany />
        </Route>

        <Route path="/companyform">
          <CreateRecord />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/profile">
          <Navbarprofile />
        </Route>

      </Router>



    </div>
  );
}

export default App;
