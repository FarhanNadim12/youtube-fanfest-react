import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import './Name.css';
const Name = (props) => {
    return (
        <div className="name">

            <h4><FontAwesomeIcon icon={faUserAlt} /> {props.name}</h4>
        </div>
    );
};

export default Name;