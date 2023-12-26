import { useParams } from "react-router";
const UserDetails = () => {
  const { id } = useParams();
  //api (id)
  return <div>UserDetails {id}</div>;
};

export default UserDetails;
