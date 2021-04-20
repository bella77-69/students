import React from 'react';
import { useEffect, useState } from "react";

function SearchFrom (props) {
    console.log('Console for SearchForm props', props)

    // const[search, setSearch] = useState('');
    // const[filtered, setFiltered] = useEffect([]);

    // useEffect(() => {
    //     const filteredStudent = props.filter(student => student.firstName.toLowerCase().includes(search));
    //     setFiltered(filteredStudent);
    // }, [search]);

    // function handleChange(e) {
    //     e.preventDefault();
    //     setSearch(e.target.value);
    // };

    return (
        <div>
            <form>
                {/* <input value={search} onChange={handleChange} placeholder="Search by name"/> */}
                <input  placeholder="Search by name"/>
            </form>
        </div>
    )
};

export default SearchFrom;