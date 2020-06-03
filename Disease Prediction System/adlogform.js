import React, { Component } from 'react';
import Menu from './Menu';
import './adlogform.css';
import 'tachyons';
import { Link, Redirect } from 'react-router-dom';
 
class adlogform extends Component{
    constructor(props){
        super(props)
        const token= localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }   
            this.state = {
            username:'',
            password:'',
            loggedIn
        }
        this.onChange= this.onChange.bind(this)
        this.submitForm= this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const {username,password }= this.state
        //login logic
        if(username=== "ASR" && password==="asr")
        localStorage.setItem("token","vvhbhhuhuhe")
        this.setState({
            loggedIn: true
        })
        if(username!== "ASR" && password!=="asr")
        alert('YOU HAVE ENTERED WRONG DETAILS!!!')
    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to="/Menu"/>
        }
        return(
            <div className="adminform tc ma0 pa0 dib">
                <h1>ADMIN LOGIN</h1>
                <form onSubmit={this.submitForm}>
                <input type="text" placeholder="USERNAME" name="username" value={this.state.username} onChange={this.onChange} / ><br/>
                <br/>
                    
                <input type="password" placeholder="PASSWORD" name="password" value={this.state.password} onChange={this.onChange}/><br/>
                <br/>
                
                <input type="submit" value="SUBMIT"/>
                </form>
            </div>
            )
            }
}
export default adlogform;