/* eslint-disable react/jsx-key */

import React, { useState, useEffect } from 'react';


export default function Table1() {

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

  return (
    <div className="container">
    <div className="row col-md-6 col-md-offset-2 custyle">
      <a href="#" className="btn btn-primary btn-xs pull-right"><b>+</b> Add new categories</a><table className="table table-striped custab">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Parent ID</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>


        {
            (students.length > 0) ?
            students.map((student) => {
              return <div>
              <tr>
            <td>{student.sn}</td>
            <td>{student.name}</td>
            <td>{student.regno}</td>
            <td className="text-center"><a className="btn btn-info btn-xs" href="#"><span className="glyphicon glyphicon-edit" /> Edit</a> <a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove" /> Del</a></td>
          </tr>
              </div>
            })
            : ''
          }

        
        
        
         
        </tbody></table>
    </div>
  </div>
  )
}
