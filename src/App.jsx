import Home from "./Component/Home/Home";
import LoginComponent from "./Component/Login/Login";

const App = () => {
  let user = "Amrit";
  return <>{user ? <Home name={user} /> : <LoginComponent />}</>;
};
export default App;

// import { useState } from "react";
// import "./App.css";
// import HeadingComponent from "./Component/Heading/Heading.component";
// const App = () => {
//   const [name, setName] = useState("");
//   const [stringValue, setStringValue] = useState("");
//   const handleInputChange = (e) => {
//     setStringValue(e.target.value);
//   };
//   const handleClick = () => {
//     setName(stringValue);
//   };
//   console.log("------ 1st RENDER ------");
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "90vh",
//       }}
//     >
//       <input placeholder="Enter Name" onChange={handleInputChange} />
//       <button onClick={handleClick}>Click me</button>
//       <HeadingComponent data={name} data2={"Hello"} data3={"byebye"} />
//     </div>
//   );
// };
// export default App;
