import React from "react";
import Student from "./Student";

function StudentBox({ el, idx }) {
  return (
    <div className="student">
      <h1> Student# {idx + 1} </h1>
      <p>Name: {el.name}</p>
      <p>Age: {el.age}</p>
      <p>City: {el.city}</p>
      <Student name={el.name}></Student>
    </div>
  );
}

export default StudentBox;
