import React from 'react'

function PhaseOne({data,handleChange}) {
  return (
    <form>
        <label>Full Name</label>
        <input value={data.fullName} onChange={handleChange} name='fullName' type="text" placeholder="Enter your name" />
        <br />
        <label>Email</label>
        <input value={data.email} onChange={handleChange} name='email' type="email" placeholder="Enter your age" />
        <br />
        <label>Phone Number</label>
        <input value={data.phoneNumber} onChange={handleChange} name='phoneNumber' type="text" placeholder="Enter your city" />
        <br />
        <label>Date of Brrth</label>
        <input value={data.dateOfBirth} onChange={handleChange} name='dateOfBirth' type="date" placeholder="Enter your city" />
        <br />
      </form>
  )
}

export default PhaseOne