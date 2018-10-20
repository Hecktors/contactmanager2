import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = { 
    show: false
  };

  onShowClick = () => {
    this.setState({show: !this.state.show})
  }

  onDeleteClick = async (id, dispatch)=> {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id});
    } catch(e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  }

  render() {
    return (
      <Consumer>
        { value => {        
          const { id, name, email, phone } = this.props.contact;
          const { dispatch } = value;
          const icon = (this.state.show ? "fas fa-sort-up" :  "fas fa-sort-down");
          let data = null;
          this.state.show && (
            data = 
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          )

          return (
            <div className="card card-body mb-3 bg-light">
              <h3 className="d-flex">{name}&nbsp;
                <i onClick={() => this.setState({ show: !this.state.show })} className={icon}></i>
                <Link className="ml-auto" to={`/contact/edit/${id}`} >
                  <i className="d-inline fas fa-pencil-alt mr-3" style={{color:'#000'}}></i>
                </Link>
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times text-danger"></i></h3>            
              {data}
            </div>
            )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;
