import React from 'react';
import Item from './Item';
import Modal from './Modal';
import Form1 from './Form1';
import Form2 from './Form2';
import Store from './Store';
import * as AppActions from './AppActions';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.get().list;
  }

  componentWillMount() {
    Store.on('change', function() {
      this.setState(Store.get().list);
    }.bind(this));
  }

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
          Doctor List
        </p>
        <div className="panel-block has-text-centered">
          {(function() {
            if(items.length > 0){
              return <table className="table">
                       <thead>
                         <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Phone</th>
                           <th>Speciality</th>
                           <th></th>
                         </tr>
                       </thead>
                       <tbody>
                         { items }
                       </tbody>
                     </table>;
            }
          })()}

        </div>
      </div>
    );
  }
}