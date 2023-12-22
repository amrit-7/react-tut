import { useParams } from "react-router";

const UserDetails = () => {
  const { userId } = useParams();
  //api (id)
  return <div>UserDetails {userId}</div>;
};

export default UserDetails;
