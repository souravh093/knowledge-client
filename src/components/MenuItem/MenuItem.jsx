import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({name, path}) => {
    return (
        <Link className='hover:text-gray-700 transition-all' to={path}>
            <li>{name}</li>
        </Link>
    );
};

export default MenuItem;