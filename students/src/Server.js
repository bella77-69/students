import React, { useState, useEffect } from "react";
import StudentCard from './Components/StudentCard';
import SearchForm from './Components/SearchForm';
import axios from "axios";
import './main-card.css';

function Server() {     
    const [studentsApi, setStudentsApi] = useState([]);

    useEffect(() => {
        axios 
            .get('https://api.hatchways.io/assessment/students')
            .then(res => {
                setStudentsApi(res.data.students);
            })
            .catch(err => {
                console.log('Error!', err)
            });
    }, []);
    console.log('Console for data:', studentsApi)


  return (
    <div className="Main-Card">
        <SearchForm students={studentsApi}/>,
        {studentsApi.map((student) => {
            return <StudentCard 
                        pic={student.pic}
                        firstName = {student.firstName}
                        lastName={student.lastName}
                        email={student.email}
                        company={student.company}
                        skill={student.skill}
                        grades={student.grades}
                        />
        })}
    </div>
  );
}

export default Server;