import React from 'react';
import { Link } from 'react-router-dom';
if(process.env.WEBPACK) require('./index.scss');

const RouteTo = ({label, route}) => {
    return(
    <Link to={`/${route}`}>
        <button className='link_button'>{label}</button>
    </Link>
    )
};

export default RouteTo;