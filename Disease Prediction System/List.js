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
    let items = Object.keys(this.state.items).map(function(k) {
      let i = this.state.items[k];
      return <Item key={k} id={i.id} name={i.name} email={i.email} phone={i.phone} spec={i.spec} />;
    }.bind(this));

    return (
      <div className="panel">
        <p className="panel-heading">
        </p>
        <div className="panel-block has-text-centered">
          <a className="button is-link" onClick={this._handleAddUser}>create a user</a>
        </div>
      </div>
    );
  }
}