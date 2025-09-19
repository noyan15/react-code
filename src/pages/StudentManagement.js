import React,{ useState } from 'react'
import './studentManagement.css'

function StudentManagement() {
    const [students,setStudents] = useState([])
    const [name,setName] = useState("");
    const [performance,setPerformance] = useState();
    const [country,setCountry] = useState("");

    const [formData,setFormData] = useState({
        studentName: "",
        performance: "",
        country: ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form submitted");
        setStudents(
            [
                ...students,
                formData
                
            ]
        )
        setName('');
        setPerformance('');
        setCountry('');
    }

    function handleChange (e) {
        const value = e.target.value;
        const name = e.target.name;
        console.log(name,value);
        setFormData({
            ...formData,
            [name]:value
        })
    }

    function handlePerformanceChange (e) {
        console.log(e.target)
    }

  return (
    <div>
        <h1>Student Management System</h1>
        <form> 
            <label>Student Name</label>
            <input name='studentName' value={formData.studentName} onChange={handleChange} type="text" placeholder='Enter the name' />
            <br />
            {/* <label>Performance</label>
            <input name='performance' value={formData.performance} onChange={handleChange} type="number" placeholder='Enter the performance' />
            <br /> */}
            <label>Country</label>
            <input name='country' value={formData.country} onChange={handleChange} type="text" placeholder='Enter the country' />
            <br />
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>

        <table>
            <tr>
                <th>Name</th>
                {/* <th>Performance</th> */}
                <th>Country</th>
            </tr>
            {
                students.map((item, index) => (
                    <tr>
                        <td>{item.studentName}</td>
                        {/* <td>{item.performance}</td> */}
                        <td>{item.country}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default StudentManagement