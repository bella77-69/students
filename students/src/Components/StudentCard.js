import React from 'react';
import './studentCard.css';

const StudentCard = props => {
    console.log('Console for props:', props)
    return (
        <div className="Card">
            <img className="Pic" src = {props.pic} alt={"Student's Pic"}></img>
            <div className="Info">
                <p className="Name">{props.firstName} {props.lastName}</p>
                <p className="Other-Info">Email: {props.email}</p>
                <p className="Other-Info">Company: {props.company}</p>
                <p className="Other-Info">Skill: {props.skill}</p>
                <p className="Other-Info">Average: {props.grades.reduce((a,b) => a + parseInt(b), 0) / props.grades.length}%</p>
            </div>
        </div>
    )
};

export default StudentCard;