import React from 'react';
import PropTypes from 'proptypes';
if(process.env.WEBPACK) require('./index.scss');

const Button = ({label, buttonClass, handleclick, submitting, buttonType}) => {
    return (
        <div className='button_container'>
            <button type={buttonType} className={`primary_button ${buttonClass}`} onClick={handleclick} disabled={submitting}>{label}</button>
        </div>
    );
};

Button.defaultProps = {
    label: 'button',
    buttonClass: ''
};

Button.propTypes = {
    label: PropTypes.string,
    buttonClass: PropTypes.string,
};

export default Button;