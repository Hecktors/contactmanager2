import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import { Consumer }  from '../../context';

class Contacts extends Component {
 
  
  render() {
    return(
      <Consumer>
        {value => {
          const contacts = value.contacts.map(contact => {
            return <Contact key={contact.id} contact={contact}  />
          });
          
          return (
            <Fragment>
              <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
              {contacts}
            </Fragment>
          )
          }}
      </Consumer>
    );

  }
}

export default Contacts;