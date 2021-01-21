import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = (props) => {
  const {
    value, label, id, changed, isSelected,
  } = props;
  return (
    <div className="radio-toolbar col-s-3 col-m-3 col-l-3" aria-label={value}>
      <input name={label + id} onKeyPress={changed} id={id} onChange={changed} aria-label={value} value={value} type="radio" checked={isSelected} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  changed: PropTypes.func,
  value: PropTypes.string,
  isSelected: PropTypes.string,
};
RadioButton.defaultProps = {
  label: '',
  id: '',
  changed: '',
  value: '',
  isSelected: '',
};
export default RadioButton;
