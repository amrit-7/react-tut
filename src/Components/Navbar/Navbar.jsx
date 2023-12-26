import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: 3,
        height: 50,
        backgroundColor: "#00aefe",
      }}
    >
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/womens"}>
        <button>Womens</button>
      </Link>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Navbar;
