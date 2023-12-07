import Child from "./Component/Child/Child";

const Parent = () => {
  const getData = (data) => {
    console.log("Inside PARENT = ", data);
  };
  let loggedInUser = "Amrit";
  console.log("🚀 ~ file: App.jsx:8 ~ Parent ~ loggedInUser:", loggedInUser);
  return (
    <>{loggedInUser ? <Child sendData={getData} /> : <p>Please Login</p>}</>
  );
};

export default Parent;

// const logData = (data) => {
//   console.log(data);
// };

// const addFunc = (first, second, myFunc) => {
//   const sum = first + second;
//   myFunc(sum);
// };

// addFunc(1, 2, logData);
