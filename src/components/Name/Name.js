import React from 'react';
import './Name.css';
const Name = (props) => {
    return (
        <div className="name">
            <h4>{props.name}</h4>
        </div>
    );
};

export default Name;