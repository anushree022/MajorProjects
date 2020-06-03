import React from 'react';
import * as AppActions from './AppActions';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
  }

  _handleEdit(e) {
    e.preventDefault();

    AppActions.openPopup(this.props.id);
  }

  _handleRemove(e) {
    e.preventDefault();

    AppActions.removeUser(this.props.id);
  }


  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
        <td>{this.props.gender}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.email}</td>
        <td>
          <a className="button is-small" onClick={this._handleEdit}>Edit</a>
          <a className="button is-small" onClick={this._handleRemove}>Remove</a>
        </td>
      </tr>
    );
  }
}
