import { useState } from "react";

/* eslint-disable react/prop-types */
const Child = ({ name, sendData }) => {
  const [text, setText] = useState("");
  const handleSendData = () => {
    sendData(text);
  };
  const handleChangeName = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>Child</h1>
      {name}
      <input onChange={handleChangeName} />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSendData}>Send</button>
      </div>
    </>
  );
};

export default Child;
