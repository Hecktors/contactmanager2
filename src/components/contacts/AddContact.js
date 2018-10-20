import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {
    }
  }

  onInputChange = (e) => { this.setState({[e.target.name]: e.target.value}) }

  onFormSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === '') {this.setState({errors: {name : 'Name is required'}}); return}
    if (email === '') { this.setState({ errors: { email: 'Email is required'}}); return}
    if (phone === '') { this.setState({ errors: { phone: 'Phone is required'}}); return}
    
    const newContact = { name, email, phone};

    const res =  await axios.post('https://jsonplaceholder.typicode.com/users/', newContact);
    dispatch({type: 'ADD_CONTACT', payload: res.data})
    this.setState({name: '', email:'', phone:'', errors: ''});
    this.props.history.push('/');
     
   
  }

  render() {
    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header"><h3>Add Contact</h3></div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    name="name"
                    label="Name"                    
                    onInputChange={this.onInputChange}
                    placeholder="Enter Name"
                    value={this.state.name}
                    error={this.state.errors.name}
                    // required="required"
                  />
                  <TextInputGroup 
                    name="email"
                    label="Email"
                    type="email"                
                    onInputChange={this.onInputChange}
                    placeholder="Enter Email"
                    value={this.state.email}
                    error={this.state.errors.email}
                    // required="required"
                  />
                  <TextInputGroup 
                    name="phone"
                    label="Phone"                    
                    onInputChange={this.onInputChange}
                    placeholder="Enter Phone"
                    value={this.state.phone}
                    error={this.state.errors.phone}
                    // required="required"
                  />
                  <input type="submit" className="btn btn-primary btn-lg btn-block" value="Add Contact" />
                </form>
              </div>

            </div>
          )
        }}   
      </Consumer>

    )
    
  }
}

export default AddContact;