import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


function TextInputGroup({name, label, onInputChange, type, placeholder, value, error, required}){
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onInputChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className={classnames('form-control form-control-lg', {'is-invalid': error})}
        value={value} required={required} />
        <div className="invalid-feedback">{error}</div>
    </div>
  )
}

TextInputGroup.propTypes = {
  onInputChange: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.string,
  error: PropTypes.string,
}

TextInputGroup.defaultProps = {
  type: 'text'
}
export default TextInputGroup;

