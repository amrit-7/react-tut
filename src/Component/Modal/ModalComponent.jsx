const ModalComponent = (props) => {
  const { name } = props;
  return (
    <div
      style={{
        border: "1px solid green",
        padding: "10px",
        boxShadow: "1px 1px 5px #000",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <h1>Hellllooo {name}</h1>
    </div>
  );
};

export default ModalComponent;
