import { useState } from "react";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  // useState react di built in hook hai, jo react package to mildi hai, it will give two things, pehle vali is the value and second one is the function to update the value
  const [stringValue, setStringValue] = useState("");
  const handleInputChange = (e) => {
    setStringValue(e.target.value); // state update krde pye, using setString function
  };
  const handleClick = () => {
    setName(stringValue);
  };
  console.log("------ 1st RENDER ------");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
      }}
    >
      <input placeholder="Enter Name" onChange={handleInputChange} />
      <button onClick={handleClick}>Click me</button>
      {name}
    </div>
  );
};
export default App;
