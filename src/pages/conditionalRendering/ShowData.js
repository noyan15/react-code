import React from 'react'

function ShowData({data}) {
  return (
    <table>
        <tr>
            <td>fullName</td>
            <td>Email</td>
            <td>phoneNumber</td>
            <td>DOB</td>
            <td>city</td>
            <td>country</td>
            <td>postalCode</td>
            <td>userName</td>
        </tr>
        {
            data.map((item) => {
                return (
                    <tr>
                        <td>{item.fullName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                        <td>{item.postalCode}</td>
                        <td>{item.userName}</td>
                    </tr>
                )
            })
        }
    </table>
  )
}

export default ShowData