import React, { useState } from "react";
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import PhaseThree from "./PhaseThree";
import "./main.css";

function Main() {
    const [activePhase,setActivePhase] = useState(1);
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
  return (
    <div>
      <h1>Main</h1>
      <div className="btns-container">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="forms-container">
        {
            activePhase === 1 && <PhaseOne  />
        }
        {
            activePhase === 2 && <PhaseTwo />
        }
        {
            activePhase === 3 && <PhaseThree />
        }
        {/* <PhaseOne />
        
        <PhaseTwo />
        <PhaseThree /> */}
      </div>
    </div>
  );
}

export default Main;
