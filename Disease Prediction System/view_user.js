import React from 'react';
import Form2 from './Form2US';
import List2 from './List2US';
import "./bulma.css";
import './add_doctorstyle.css';
import 'tachyons';
import {Link,Redirect} from 'react-router-dom';
import Menu from './Menu';


const view_doctor =  () => {
    return(
        <div className="add_doctorstyle">
            <center><h2>VIEW USER</h2></center>
            <Link to="/Menu" className="topcorner" > MENU</Link>
            <br/>
 			<Form2/>
 			<div className="add_doctors">
     		<List2 />
     		</div>
        </div>
    )
}
export default view_doctor;