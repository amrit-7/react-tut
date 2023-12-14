/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
const UseEffect = () => {
  const [value, setValue] = useState("");
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  //   useEffect(() => {}, []);
  const handleSync = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count > 0) {
      console.log("Fetching..... :)");
    }
  }, [count]);
  useEffect(() => {
    setUser("Amrit");
  }, []);
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSync}>Sync Data</button>
      <h1>{user}</h1>
    </>
  );
};

export default UseEffect;
