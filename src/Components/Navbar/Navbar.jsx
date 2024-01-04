import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/CurrentUser";
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser]);
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
      <div>{currentUser}</div>
    </div>
  );
};
export default Navbar;
