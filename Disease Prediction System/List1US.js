import React from 'react';
import Item from './ItemUS';
import Modal from './ModalUS';
import Form1 from './Form1US';
import Store from './StoreUS';
import * as AppActions from './AppActions';

export default class List extends React.Component {

  _handleAddUser(e) {
     e.preventDefault();
     AppActions.openPopup();
  }

  render() {
    

    return (
        <div className="panel-block has-text-centered">
          <a className="button is-link" onClick={this._handleAddUser}>Register</a>
        </div>
      
    );
  }
}
