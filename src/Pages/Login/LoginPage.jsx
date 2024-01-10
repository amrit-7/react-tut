import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/CurrentUserContext";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleLogin = () => {
    // API
    // response
    const data = {
      token: "ajhaifhuk4j5t3k",
      name: "Amritpal",
      email: email,
    };
    setTimeout(() => {
      setCurrentUser(data);
      navigate("/");
    }, 2000);
  };
  return (
    <>
      <input placeholder="Enter Email" onChange={handleChange} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
export default LoginPage;
