import React from 'react';
import TextField from './TextField';
import SelectField from './SelectField';
import Modal from './Modal';
import Store from './Store';
import * as AppActions from './AppActions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.state = Store.get().form;
  }

  componentWillMount() {
    Store.on('change', function() {
      this.setState(Store.get().form);
    }.bind(this));
  }

  _handleSubmit(e) {
    e.preventDefault();

    if(this.state.mode == 'create'){
      AppActions.addUser();
    }else {
      AppActions.editUser(this.props.id);
    }

  }

  _handleClose(e) {
    e.preventDefault();
    AppActions.closePopup();
  }

  render() {

    let title;

    if (this.state.mode == 'edit'){
      title = "Edit User: " + this.state.data.name
    }
    else {
      title = "New User"
    }


    return (
      <Modal>
        <form onSubmit={this._handleSubmit}>
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" onClick={this._handleClose}></button>
          </header>
          <section className="modal-card-body">
            <TextField label="Name" name="name" value={this.state.data.name} errors={this.state.errors['name']} />
            <TextField label="Email" name="email" value={this.state.data.email}  errors={this.state.errors['email']} />
            <TextField label="Phone No." name="phone" value={this.state.data.phone}  errors={this.state.errors['phone']} />
            <TextField label="Speciality" name="spec" value={this.state.data.spec}  errors={this.state.errors['spec']} />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-primary">Save</button>
            <a className="button" onClick={this._handleClose}>Cancel</a>
          </footer>
        </form>
      </Modal>
    );
  }
}

export default Form;
