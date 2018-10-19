import React from 'react';
import { Link } from 'react-router-dom';
if(process.env.WEBPACK) require('./index.scss');

const RouteTo = ({label, route, selected}) => {
    return(
    <Link to={`/${route}`}  className='link'>
        <button className={`link_button ${selected}`}>{label}</button>
    </Link>
    )
};

export default RouteTo;