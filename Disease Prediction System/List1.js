import React from 'react';
import Item from './Item';
import Modal from './Modal';
import Form1 from './Form1';
import Store from './Store';
import * as AppActions from './AppActions';

export default class List extends React.Component {
  

  _handleAddUser(e) {
     e.preventDefault();
     AppActions.openPopup();
  }

  render() {
   

    return (
      
        <div className="panel-block has-text-centered">
          <a className="button is-link" onClick={this._handleAddUser}>create a user</a>
        </div>
      
    );
  }
}