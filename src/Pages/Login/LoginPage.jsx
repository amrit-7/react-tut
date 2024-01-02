import { useNavigate } from "react-router";
import Form from "../../Components/Form/Form";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/CurrentUser";

const LoginPage = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleEmail = (email) => {
    setEmail(email);
  };
  const handleLogin = () => {
    setCurrentUser(email);
    navigate("/");
  };
  return (
    <>
      <Form placeholder={"Enter Email"} setEmail={handleEmail} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginPage;
