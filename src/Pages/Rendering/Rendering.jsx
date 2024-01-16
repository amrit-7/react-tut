import { useState } from "react";

const Rendering = () => {
  //   const [haigaBlue, setIsBlue] = useState(false);
  //   const handleBlue = () => {
  //     setIsBlue(!haigaBlue);
  //     setIsRed(false);
  //   };
  //   const [haigaRed, setIsRed] = useState(false);
  //   const handleRed = () => {
  //     setIsRed(!haigaRed);
  //     setIsBlue(false);
  //   };
  const data = [
    {
      id: 1,
      color: "#FF004D",
      name: "Red",
    },
    {
      id: 2,
      color: "blue",
      name: "Blue",
    },
    {
      id: 3,
      color: "#F3CCF3",
      name: "Plum",
    },
    {
      id: 4,
      color: "orange",
      name: "Orange",
    },
  ];
  const [color, setColor] = useState("white");
  console.log("🚀 ~ Rendering ~ color:", color);
  const handleColor = (color) => {
    setColor(color);
  };
  return (
    <div
      className="container"
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h4>Give styles to the box</h4>
      <div style={{ display: "flex" }}>
        {data.map((col) => {
          const { id, name, color } = col;
          return (
            <button
              key={id}
              style={{ marginRight: 10 }}
              onClick={() => handleColor(color)}
            >
              {name} color
            </button>
          );
        })}
        <button
          style={{ marginRight: 10 }}
          onClick={() => handleColor("white")}
        >
          Remove Color
        </button>
      </div>
      {/* <div
        style={{
          margin: 10,
          height: 300,
          width: 300,
          border: "1px solid #aeaeae",
          backgroundColor: haigaRed ? "red" : haigaBlue ? "blue" : "white",
        }}
      ></div> */}

      <div
        style={{
          margin: 10,
          height: 300,
          width: 300,
          border: "1px solid #aeaeae",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default Rendering;
