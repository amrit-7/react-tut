import Form from "../../Components/Form/Form";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/CurrentUser";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate()
  const {setCurrentUser} = useContext(UserContext)
  const [name, setName] = useState("");
  const handleEmail = (childValue) => {
    setName(childValue);
  };
  const handleLogin = () => {
    setCurrentUser(name)
    // api
    // 200
    console.log("🚀 ~ file: LoginPage.jsx:20 ~ handleLogin ~ name:", name)
    navigate("/")

  };
  return (
    <>
      <Form placeholder={"Enter Email"} setEmail={handleEmail} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
export default LoginPage;
