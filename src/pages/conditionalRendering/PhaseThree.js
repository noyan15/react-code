import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PhaseThree({data,handleChange,Submit,Reset}) {
  const navigate = useNavigate();
  function handleBack() {
    navigate("/dashboard/phase2");
  }
  return (
    <>
    <div className="btns-container">
        <button onClick={handleBack}>Back</button>
        <button onClick={Reset}>Reset Form</button>
        <button onClick={Submit}>Submit</button>
      </div>
    
    <form>
      <label>
        UserName
      </label>
      <input value={data.userName} onChange={handleChange} name='userName' type="text" placeholder="Enter your name" />
      <br />
      <label>
        Password
      </label>
      <input value={data.password} onChange={handleChange}  name='password' type="password" placeholder="Enter your password" />
      <br />
      <label>
        Confirm Password
      </label>
      <input value={data.confirmPassword} onChange={handleChange} name='confirmPassword' type="password" placeholder="Enter your password" />
      <br />
    </form>
    </>
  )
}
