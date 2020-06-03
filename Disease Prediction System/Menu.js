import React, { Component} from 'react';
import './Menu.css';
import "tachyons";
import Form1 from './Form1';
import "./bulma.css";
import view_doctor from './view_doctor';
import view_user from './view_user';
import Logout from './Logout';
import {Link,Redirect} from 'react-router-dom';
import Store from './Store';
import * as AppActions from './AppActions';
import Item from './Item';
import Modal from './Modal';


class Menu extends Component{
    constructor(props){
        super(props)
        const token= localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
    _handleAddUser(e) {
     e.preventDefault();
     AppActions.openPopup();
  }
    render(){
        if(this.state.loggedIn=== false){
            return <Redirect to="/"/>
        }
    return(
        <div className="menustyle tc  ">
            <ul className="menustyle1 bg-black dib pa2 tc">
                
                <li><a onClick={this._handleAddUser}>ADD DOCTOR</a><Form1/></li>
                <li><Link to="/viewuser" className="link">VIEW USER</Link></li>
                <li><Link to="/viewdoctor" className="link">VIEW DOCTOR</Link></li>
                <li><Link to="/logout" className="link">LOGOUT</Link></li>
            </ul>
            <h2>HI ADMIN!!! <br/>WELCOME TO YOUR WORK SPACE!!!</h2>
        </div>
    )
}
}
export default Menu;