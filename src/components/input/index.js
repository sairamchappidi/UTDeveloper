import React from 'react';
import PropTypes from 'proptypes';
if(process.env.WEBPACK) require('./index.scss');

const Input = ({label, inputClass, inputId, inputName, inputType}) => {
    return (
    <div className='input_container'>
        <input className={`primary_input ${inputClass}`} type={inputType} id={inputId} name={inputName} placeholder={label}/>
        <label htmlfor={inputId}>{label}</label>
    </div>
    )
};

Input.defaultProps = {
    label: 'PlaceHolder',
    inputClass: '',
    inputType: 'text',
    inputName: '',
    inputId: ''
};

Input.propTypes = {
    label: PropTypes.string,
    inputClass: PropTypes.string,
    inputType: PropTypes.string,
    inputName: PropTypes.string,
    inputId: PropTypes.string
};

export default Input;