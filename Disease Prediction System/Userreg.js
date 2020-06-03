import React from "react";
import './Userreg.css';
import 'tachyons';
import {Link, Redirect } from 'react-router-dom';
import Form1 from './Form1US';
import "./bulma.css";
import List1 from './List1US';
import usersr from './Usersr';
import { browserHistory } from 'react-router'


export default class Userreg extends React.Component {
  

  handleSubmit = event => {
    event.preventDefault();
      this.props.history.push("/usersr")
     
  };

  render() {
   
    return (
      <form onSubmit={this.handleSubmit}>
          <div className="add_doctorstyle">
            <center><h2>User Details</h2></center>
            <button type="submit" className="topcorner" >Check Up</button>
            <br/>
             <Form1/>
             <List1/>
             <div className="li">
             <Link to="/" className="link"><u>BACK TO MAIN PAGE</u></Link>
             </div>
      </div>
      </form>
    );
  }
}