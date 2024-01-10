import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/CurrentUserContext";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
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
      <div style={{ display: "flex", justifyContent: "end" }}>
        {currentUser ? (
          <h4>{currentUser ? currentUser.name : null}</h4>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
