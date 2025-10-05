import React from "react";
import { useNavigate } from "react-router-dom";

function PhaseOne({ data, handleChange, Reset }) {
  const navigate = useNavigate();

  function handleNext() {
    navigate("/dashboard/phase2");
  }
  return (
    <div>
      <div className="btns-container">
        <button>Back</button>
        <button onClick={Reset}>Reset Form</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <form>
        <label>Full Name</label>
        <input
          value={data.fullName}
          onChange={handleChange}
          name="fullName"
          type="text"
          placeholder="Enter your name"
        />
        <br />
        <label>Email</label>
        <input
          value={data.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter your age"
        />
        <br />
        <label>Phone Number</label>
        <input
          value={data.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
          type="text"
          placeholder="Enter your city"
        />
        <br />
        <label>Date of Brrth</label>
        <input
          value={data.dateOfBirth}
          onChange={handleChange}
          name="dateOfBirth"
          type="date"
          placeholder="Enter your city"
        />
        <br />
      </form>
    </div>
  );
}

export default PhaseOne;
