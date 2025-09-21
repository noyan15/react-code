import React, { useState } from "react";
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import PhaseThree from "./PhaseThree";
import "./main.css";
import ShowData from "./ShowData";
import {Routes,Route} from "react-router-dom";

function Main() {
    const [activePhase,setActivePhase] = useState(1);
    const [arr,setArr] = useState([]);
    const [formData,setFormData] = useState({
      fullName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      city: "",
      country: "",
      postalCode: "",
      userName: "",
      password: "",
      confirmPassword: "",
    })
    function handleChange (e) {
        const value = e.target.value;
        const name = e.target.name;
        console.log(name,value);
        setFormData({
            ...formData,
            [name]:value
        })
    }
    
    function handleNext () {
        if(activePhase ===3){
            return;
        }
        setActivePhase(activePhase + 1);
    }
    function handleBack () {
        if(activePhase === 1){
            return;
        }
        setActivePhase(activePhase - 1);
    }

    function Submit () {
        setArr([...arr,formData]);
        setActivePhase(1);
        setFormData({
            fullName: "",
            email: "",
            phoneNumber: "",
            dateOfBirth: "",
            city: "",
            country: "",
            postalCode: "",
            userName: "",
            password: "",
            confirmPassword: "",
          })
    }

    function Reset () {
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          dateOfBirth: "",
          city: "",
          country: "",
          postalCode: "",
          userName: "",
          password: "",
          confirmPassword: "",
        })
    }

    //main
    
  return (
    <div>
      <h1>Main</h1>
      
      <div className="forms-container">
        <Routes>
          <Route path='/' element={<PhaseOne data={formData} handleChange={handleChange} Reset={Reset} />} />
          <Route path='/phase2' element={<PhaseTwo data={formData} handleChange={handleChange} Reset={Reset} />} />
          <Route path='/phase3' element={<PhaseThree data={formData} handleChange={handleChange} Submit={Submit} Reset={Reset} />} />
        </Routes>
        {/* {
            activePhase === 1 && <PhaseOne data={formData} handleChange={handleChange} />
        }
        {
            activePhase === 2 && <PhaseTwo data={formData} handleChange={handleChange} />
        }
        {
            activePhase === 3 && <PhaseThree data={formData} handleChange={handleChange} />
        } */}
        {/* <PhaseOne />
        
        <PhaseTwo />
        <PhaseThree /> */}
        {
          arr.length !== 0 && <ShowData data={arr} />
        }
        
      </div>
    </div>
  );
}

export default Main;
