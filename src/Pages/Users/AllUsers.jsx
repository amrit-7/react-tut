import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (res.status == 200) {
          setUsers(res.data);
          setIsLoading(false);
          error && setError("");
        }
      } catch (error) {
        console.log(error);
        setError("Error while fetching user");
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  const handleNavToDetails = (id) => {
    navigate(`${id}`);
  };
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        users &&
        users.map((user) => {
          return (
            <div
              style={{ padding: 2, border: "1px solid #aeaeae", margin: 4 }}
              key={user.id}
              onClick={() => handleNavToDetails(user.id)}
            >
              <p>{user.name}</p>
            </div>
          );
        })
      )}
      {error ? (
        <div>
          <h4 style={{ color: "red" }}>{error}</h4>
        </div>
      ) : null}
    </div>
  );
};

export default AllUsers;
