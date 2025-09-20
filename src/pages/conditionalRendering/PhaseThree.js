import React from 'react'

export default function PhaseThree({data,handleChange}) {
  return (
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
  )
}
