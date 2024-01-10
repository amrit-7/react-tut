import { useContext } from "react";
import { UserContext } from "../../Contexts/CurrentUserContext";

const Footer = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div
      style={{
        p: 4,
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {currentUser ? currentUser.name : null} @copyright-2023
    </div>
  );
};

export default Footer;
