import React from 'react'

function PhaseTwo({data,handleChange}) {
  return (
    <form>
        <label>City</label>
        <input value={data.city} onChange={handleChange} name='city' type="text" placeholder="Enter your city" />
        <br />
        <label>Country</label>
        <input value={data.country} onChange={handleChange} name='country' type="text" placeholder="Enter your country" />
        <br />
        <label>Postal Code</label>
        <input value={data.postalCode} onChange={handleChange} name='postalCode' type="number" placeholder="Enter your postal code" />
        <br />
    </form>
  )
}

export default PhaseTwo