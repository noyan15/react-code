import React from "react";
import { useNavigate } from "react-router-dom";

function PhaseTwo({ data, handleChange, Reset }) {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/dashboard/phase3");
  }
  function handleBack() {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="btns-container">
        <button onClick={handleBack}>Back</button>
        <button onClick={Reset}>Reset Form</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <form>
        <label>City</label>
        <input
          value={data.city}
          onChange={handleChange}
          name="city"
          type="text"
          placeholder="Enter your city"
        />
        <br />
        <label>Country</label>
        <input
          value={data.country}
          onChange={handleChange}
          name="country"
          type="text"
          placeholder="Enter your country"
        />
        <br />
        <label>Postal Code</label>
        <input
          value={data.postalCode}
          onChange={handleChange}
          name="postalCode"
          type="number"
          placeholder="Enter your postal code"
        />
        <br />
      </form>
    </>
  );
}

export default PhaseTwo;
