import React from 'react';
import Proj_firstpage from './Proj_firstpage';
import Menu from './Menu';
import add_doctor from './add_doctor';
import adlogform from './adlogform';
import Logout from './Logout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Userreg  from './Userreg';
import view_doctor from './view_doctor';
import view_user from './view_user';
import Usersr from './Usersr';

function App() {
  return(
      <div>
    <div>
    <Router>
    <Route exact path="/" component= {Proj_firstpage} /> 
      <Switch>
      <Route  path="/adlog"   component= {adlogform} />        
       
        <Route  path="/Menu"   component= {Menu} />        
        <Switch>
        <Route path="/adddoctor"   component= {add_doctor} />
         <Route path="/viewdoctor"   component= {view_doctor} />
        <Route path="/viewuser"   component= {view_user} />     
        <Route path="/logout"   component= {Logout} />     
                     
        </Switch>
      </Switch>
      <Switch >
      <Route  path="/userreg"   component= {Userreg} />
       <Route  path="/usersr"   component= {Usersr} />     
      </Switch>
      </Router>
    </div>
  </div> 
  );
}


export default App;