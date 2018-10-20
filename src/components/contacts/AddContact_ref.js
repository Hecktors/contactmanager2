import React, { Component } from 'react';
import { Consumer } from '../../context';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
 
  onFormSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    }
    console.log(contact);
  }

  static defaultProps = {
    name: 'Fred Smith',
    email: 'gred@gmail.com',
    phone: '777-777-7777'
  }

  render() {
    const { name, email, phone } = this.props;
    return (
      <Consumer>
        { defaultValue => {
          return (
            <div className="card mb-3">
              <div className="card-header"><h3>Add Contact</h3></div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control lg" 
                      defaultValue={name}
                      ref={this.nameInput} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control lg"
                      defaultValue={email}
                      ref={this.emailInput} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Phone"
                      className="form-control lg"
                      defaultValue={phone}
                      ref={this.phoneInput} />
                  </div>
                  <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Add Contact" />
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