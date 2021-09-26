import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Youtuber.css'
const Youtuber = (props) => {
    const { img, name, profession, age, country, salary } = props.youtuber;
    return (
        <div className="youtubers">
            <div className="youtuber">
                <img width="150px" src={img} alt="" />
                <div className="details">
                    <h3> Name: {name}</h3>
                    <p>Profession: <b>{profession}</b></p>
                    <p>Age: <b>{age}</b></p>
                    <p>Country <b>{country}</b></p>
                    <p>Salary: <b>${salary}</b></p>
                    <button onClick={() => props.handleButton(props.youtuber)}><FontAwesomeIcon icon={faAngleRight} /> Invite</button>
                </div>
            </div>
        </div>
    );
};

export default Youtuber;