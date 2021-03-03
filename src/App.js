import { useState } from "react";
import countryCodes from "./countryOriginCharCodes.json";

function App() {
  let vehicleDetails = {};
  const [invalidVin, setInvalidVin] = useState(true);
  
  const handleInputChange = (e)=> {
    console.log(e.target.value[0]);
    //VIN does not include letters i,o,q
    const charCount = e.target.value.trim().length !== 17;
    const hasSpecialChar = new RegExp(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/).test(e.target.value);
    const hasIOQ = new RegExp(["i","o","q"].join("|")).test(e.target.value.toLowerCase());

    setInvalidVin(hasIOQ || hasSpecialChar || charCount);
  };

  return (
    <div className="container">
      <h1>VIN App</h1>
      <input onInput={handleInputChange} name="vin" id="vin" placeholder="Enter VIN here..." minLength="17" maxLength="17" />
      <div className=""></div>
      <h2>{invalidVin ? "Invalid VIN supplied": "Valid VIN" }</h2>
    </div>
  );
}

export default App;
