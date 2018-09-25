import React from 'react';
import PropTypes from 'proptypes';

const Button = ({label, buttonClass}) => {
    return (
        <button className={`priamry-button ${buttonClass}`}>{label}</button>
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