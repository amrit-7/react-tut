/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalComponent from "../Modal/ModalComponent";
const Home = ({ name }) => {
  const [visible, setVisible] = useState(false);
  const handleToggleModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h1>Welcome Home {name}</h1>
      <button onClick={handleToggleModal}>Open Modal</button>
      {visible ? <ModalComponent name={name} /> : null}
    </>
  );
};

export default Home;
