import React from 'react';
import PropTypes from 'proptypes';
if(process.env.WEBPACK) require('./index.scss');

const Input = ({input, inputClass, inputId, inputName, inputType, placeHolder, label , inputValue,  meta: { touched, error }}) => {
    return (
    <div className='input_container'>
        <label className='input_label' htmlFor={inputId}>{label}</label>
        <input {...input} className={`primary_input ${inputClass}`} type={inputType} id={inputId} aria-label={label}
        placeholder={placeHolder} name={inputName} autoComplete="off"/>
        {touched && error && <span>{error}</span>}
    </div>
    )
};

Input.defaultProps = {
    label: 'PlaceHolder',
    inputClass: '',
    inputType: 'text',
    inputName: '',
    inputId: 'inputId'
};

Input.propTypes = {
    label: PropTypes.string,
    inputClass: PropTypes.string,
    inputType: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string
};

export default Input;