import React, {useState} from 'react';
import './studentCard.css';

const SearchGradesExpandable = props => {
    // console.log('Console for props:', props)
    const [expanded, setExpanded] = useState(false);
    
    return (
        <>
        <button className="Search-Expand-Button" onClick={() => setExpanded(!expanded)}>See Test Scores</button>
        {expanded && <div className="Grades-Card">
            <p className="Grade">Test 1:   {props.grades[0]}%</p>
            <p className="Grade">Test 2:   {props.grades[1]}%</p>
            <p className="Grade">Test 3:   {props.grades[2]}%</p>
            <p className="Grade">Test 4:   {props.grades[3]}%</p>
            <p className="Grade">Test 5:   {props.grades[4]}%</p>
            <p className="Grade">Test 6:   {props.grades[5]}%</p>
            <p className="Grade">Test 7:   {props.grades[6]}%</p>
            <p className="Grade">Test 8:   {props.grades[7]}%</p>
        </div>}
        </>
    )
};

export default SearchGradesExpandable;