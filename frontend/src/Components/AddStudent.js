import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [mark1 , setMark1] = useState("");
  const [mark2 , setMark2] = useState("");
  const [mark3 , setMark3] = useState("");
  const [grade , setGrade] = useState("");

  const sentData = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      age,
      gender,
      mark1,
      mark2,
      mark3,
      grade,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("http://localhost:8070/student/add", newStudent)
          .then(() => {
            Swal.fire("Student has been successfully Saved!", "", "success");
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      } else if (result.isDenied) {
        Swal.fire("Details are not saved", "", "error");
      }
    });
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Student Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">
            Student Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter Student Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        
        <div>
          <label for="gender">Select Your Gender</label>
          <br />
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label for="mark1" className="form-label">
            Mark 1
          </label>
          <input
            type="number"
            className="form-control"
            id="mark1"
            placeholder="Enter Mark 1"
            onChange={(e) => {
              setMark1(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="mark2" className="form-label">
            Mark 2
          </label>
          <input
            type="number"
            className="form-control"
            id="mark2"
            placeholder="Enter Mark 2"
            onChange={(e) => {
              setMark2(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="mark3" className="form-label">
            Mark 3
          </label>
          <input
            type="number"
            className="form-control"
            id="mark3"
            placeholder="Enter Mark 3"
            onChange={(e) => {
              setMark3(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="grade" className="form-label">
            Mark 3
          </label>
          <input
            type="String"
            className="form-control"
            id="grade"
            placeholder="Enter Grade"
            onChange={(e) => {
              setGrade(e.target.value);
            }}
          />
        </div>
        
        <br />
        <div class="col-12">
          <button class="btn btn-primary" type="submit" onClick={sentData}>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
