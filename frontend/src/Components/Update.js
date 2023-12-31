import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = () => {
      axios.get(`http://localhost:8070/student/get/${id}`).then((res) => {
        setUser(res.data.user);
      });
    };
    getUser();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8070/student/update/${id}`, user)
      .then(() => {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            navigate("/get");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      })
      .catch((err) => Swal.fire("Not Updated", err.message, "error"));
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="Number"
            className="form-control"
            id="age"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="mark1">Mark 1</label>
          <input
            type="text"
            className="form-control"
            id="mark1"
            name="mark1"
            value={user.mark1}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mark2">Mark 2</label>
          <input
            type="text"
            className="form-control"
            id="mark2"
            name="mark2"
            value={user.mark2}
            onChange={handleInputChange}
          />
        </div>
        

        <div className="form-group">
          <label htmlFor="mark3">Mark 3</label>
          <input
            type="text"
            className="form-control"
            id="mark3"
            name="mark3"
            value={user.mark3}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            className="form-control"
            id="grade"
            name="grade"
            value={user.grade}
            onChange={handleInputChange}
          />
        </div>


        <br />
        <button onClick={handleFormSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
