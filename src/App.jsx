import { useState } from "react";
import Child from "./Component/Child/Child";

const Parent = () => {
  const [name, setName] = useState("Amrit");
  const getDataFromChild = (res) => {
    setName(res);
  };

  return (
    <>
      <Child name={name} sendData={getDataFromChild} />
    </>
  );
};

export default Parent;
