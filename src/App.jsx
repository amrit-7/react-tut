import { useState } from "react";
import users from "../users.json";
const App = () => {
  const [searchString, setSearchString] = useState("");
  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchString.toLowerCase());
  });
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input placeholder="Search User" type="search" onChange={handleSearch} />
      {filteredUsers.map((user) => {
        const { id, name, email } = user;
        return (
          <div
            key={id}
            style={{
              border: "1px solid #aeaeae",
              width: "200px",
              borderRadius: 10,
              padding: 5,
              marginTop: 5,
            }}
          >
            <strong>{name}</strong>
            <p>{email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
