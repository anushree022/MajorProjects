import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        doctor:[]
    }

    // FETCH USERS FROM DATABASE
    fetchDoctor = () => {
        Axios.get('http://localhost/php-react/all-users.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    doctor:data.doctor.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

     // ON EDIT MODE
     editMode = (id) => {
        let doctor = this.state.doctor.map(user => {
            if(user.id === id){
                user.isEditing = true;
                return user;
            }
            user.isEditing = false;
            return user;
        });

        this.setState({
            doctor
        });
    }

    //CANCEL EDIT MODE
    cancelEdit = (id) => {
        let doctor = this.state.doctor.map(user => {
            if(user.id === id){
                user.isEditing = false;
                return user;
            }
            return user
            
        });
        this.setState({
            doctor
        });
    }

    // UPDATE USER
    handleUpdate = (id,name,email,phone,speciality) => {
        Axios.post('http://localhost/php-react/update-user.php',
        {
            id:id,
            name:name,
            email:email,
            phone:phone,
            speciality:speciality
        })
        .then(({data}) => {
            if(data.success === 1){
                let doctor = this.state.doctor.map(user => {
                    if(user.id === id){
                        user.name = name;
                        user.email = email;
                        user.phone = phone;
                        user.speciality = speciality;
                        user.isEditing = false;
                        return user;
                    }
                    return user; 
                });
                this.setState({
                    doctor
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }


    // DELETE USER
    handleDelete = (id) => {
        let deleteUser = this.state.doctor.filter(user => {
            return user.id !== id;
        });
        
        Axios.post('http://localhost/php-react/delete-user.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                      doctor:deleteUser
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    // INSERT USER
    insertUser = (event,name,email,phone,speciality) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/add-user.php',{
            name:name,
            email:email,
            phone:phone,
            speciality:speciality
        })
        .then(function ({data}) {
            if(data.success === 1){
                this.setState({
                    doctor:[
                        {"id":data.id,"name":name,"email":email, "phone":phone, "speciality":speciality},
                        ...this.state.doctor
                    ]
                    
                });console.log(data);
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            alert(error);
        });
    }
}

export default Actions;