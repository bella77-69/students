import React from 'react';
import SearchGradesExpandable from './SearchGradesExpandable';
import { useEffect, useState } from "react";
import './studentCard.css';

function SearchFrom (props) {
    // console.log('Console for SearchForm props', props.students)

    const[search, setSearch] = useState('');
    const[filtered, setFiltered] = useState([]);

    useEffect(() => {
        const filteredStudent = props.students.filter(student => 
        student.firstName.toLowerCase().includes(search) || 
        student.lastName.toLowerCase().includes(search));
        setFiltered(filteredStudent);
    }, [search]);

    function handleChange(e) {
        // e.preventDefault();
        setSearch(e.target.value);
    };

    return (
        <>
        <div>
            <form className="Form">
                <input className="Input" value={search} onChange={handleChange} placeholder="Search by name" />
            </form>
        </div>
        {filtered.map(filt => {
            return(
                <>
                <div className="Search-Card">
                    <img className="Search-Pic" src = {filt.pic} alt={"Student's Pic"}></img>
                    <div className="Search-Info">
                        <p className="Search-Name">{filt.firstName} {filt.lastName}</p>
                        <p className="Search-Other-Info">Email: {filt.email}</p>
                        <p className="Search-Other-Info">Company: {filt.company}</p>
                        <p className="Search-Other-Info">Skill: {filt.skill}</p>
                        <p className="Search-Other-Info">Average: {filt.grades.reduce((a,b) => a + parseInt(b), 0) / filt.grades.length}%</p>
                    </div>
                </div>
                <SearchGradesExpandable grades={filt.grades}/>
                </>
            )
        })}
        </>
    )
};

export default SearchFrom;