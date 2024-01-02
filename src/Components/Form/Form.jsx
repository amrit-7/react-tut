/* eslint-disable react/prop-types */
const Form = ({ placeholder, setEmail }) => {
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <input placeholder={placeholder} onChange={handleChange} />
    </>
  );
};

export default Form;
