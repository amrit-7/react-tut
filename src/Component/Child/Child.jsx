/* eslint-disable react/prop-types */
const Child = (props) => {
  const { sendData } = props;
  const handleClick = () => {
    //api
    //data manipulate
    //input
    const data = "dATA FROM CHILD";
    sendData(data);
  };
  return (
    <>
      <h1>Child</h1>
      <button onClick={handleClick}>Send</button>
    </>
  );
};

export default Child;
