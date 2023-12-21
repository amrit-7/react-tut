import { useNavigate } from "react-router";
import Form from "../../Components/Form/Form";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    //api
    //tokens
    navigate("/");
  };
  return (
    <>
      <Form placeholder={"Enter Email"} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginPage;
