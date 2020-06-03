import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Logout.css';
import 'tachyons';
 
class Logout  extends Component{
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
render() {
    return(
        <div className="logpage tc ma0 pa0 dib">
            <h1>BYE!!! <br/>SEE YOU AGAIN!!!</h1>
            <br/>
            <br/>
            <br/>
            <Link to="/adlog" className="link" ><u>LOGIN AGAIN</u></Link><br/>
            <Link to="/" className="link"><u>BACK TO MAIN PAGE</u></Link>
           
        </div>
    )
}
}
export default Logout;