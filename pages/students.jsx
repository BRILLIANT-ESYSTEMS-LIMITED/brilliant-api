import React, { useState, useEffect } from 'react';

export default function Students() {

  const [students, setStudents] = useState({ students: [] });


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'http://localhost:3000/api/students',
      );
      const json = await res.json();
      setStudents(json);
    };
    fetchData();
  }, [setStudents]);


  console.log(students)

  return (
    <div>
      <table border style={{width: '100%'}}>
        <tbody><tr>
            <th>SN</th>
            <th>Name</th> 
            <th>Registration</th>
          </tr>
          
          {
            (students.length > 0) ?
            students.map((student) => {
              return (
                <tr>
            <td>{student.sn}</td>
            <td>{student.name}</td>
            <td>{student.regno}</td>
          </tr>)
            })
            : ''
          }
        </tbody></table>
    </div>
  )
}
