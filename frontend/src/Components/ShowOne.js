import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ShowOne.css';

export default function ShowOne() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = () => {
      axios
        .get("http://localhost:8070/student/getMarks")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => alert(err.message));
    };
    getStudents();
  }, []);



  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Marks and Grades</h1>
      <div className="container">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Mark 1</th>
              <th scope="col">Mark 2</th>
              <th scope="col">Mark 3</th>
              <th scope="col">Grade</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {students.map((item, count = 0) => (
            <tbody>
              <tr>
                <td style={{ color: "red" }}>{count + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.mark1}</td>
                <td>{item.mark2}</td>
                <td>{item.mark3}</td>
                <td>{item.grade}</td>
                <td>
                  <button>
                    <Link to={`/get/${item._id}`} className="button">
                    Update
                  </Link>
                  </button>
                  
            
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
