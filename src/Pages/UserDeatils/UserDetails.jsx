import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
const UserDetails = () => {
  const params = useParams(); // 1  , // 2
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const getUserData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.userId}`
        );
        if (res.status == 200) {
          setUserData(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (error.response.status == 404) {
          setError("Error while fetching data");
        }
        setIsLoading(false);
      }
    };
    getUserData();
  }, [params]);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        error
      ) : (
        <Card cardData={userData} />
      )}
    </>
  );
};

export default UserDetails;
