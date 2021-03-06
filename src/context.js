import React,  { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)};

    case 'ADD_CONTACT':
      console.log("context.js: adding");
      return { ...state, contacts: [ ...state.contacts, action.payload]};

    case 'UPDATE_CONTACT':
      console.log("context.js: update");
      const updatedContacts = state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact);
      return {...state, contacts: updatedContacts};

    default: return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({contacts: res.data});   
  }

  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
