import React from 'react';
import Form1 from './Form1';
import "./bulma.css";
import List1 from './List1';
import 'tachyons';
import {Link,Redirect} from 'react-router-dom';
import view_doctor from './view_doctor';
import Menu from './Menu';
import './add_doctorstyle.css';


const add_doctor =  () => {
    return(
        <div className="add_doctorstyle">
            <center><h2>ADD THE DETAILS OF THE DOCTOR</h2></center>
            <br/>
             <Form1/>
             <List1/>
            <Link to="/viewdoctor" className="topcorner">VIEW DOCTOR</Link>
            <br/>
            <Link to="/Menu" className="topcorner1">MENU</Link>
     	</div>
    )
}
export default add_doctor;