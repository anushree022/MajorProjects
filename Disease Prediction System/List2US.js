import React from 'react';
import Item from './ItemUS';
import Modal from './ModalUS';
import Form1 from './Form1US';
import Form2 from './Form2US';
import Store from './StoreUS';
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
      return <Item key={k} id={i.id} name={i.name} age={i.age} gender={i.gender} phone={i.phone} email={i.email} />;
    }.bind(this));

    return (
      <div className="panel">
        <p className="panel-heading">
          User List
        </p>
        <div className="panel-block has-text-centered">
          {(function() {
            if(items.length > 0){
              return <table className="table">
                       <thead>
                         <tr>
                           <th>Name</th>
                           <th>Age</th>
                           <th>Gender</th>
                           <th>Phone</th>
                           <th>Email</th>
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
