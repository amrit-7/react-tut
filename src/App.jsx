/* eslint-disable no-unused-vars */
import { useState } from "react";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];
  const [allUsers, setTodoList] = useState(users);
  //default value in the state
  const [searchString, setSearchString] = useState("");
  const handleChange = (string) => {
    setSearchString(string);
  };
  const filteredData = allUsers.filter((user) => {
    return user.name.toLowerCase().includes(searchString.toLowerCase());
  });
  // const user = {
  //   name: "Amrit",
  // };
  // console.log(user.name.toLowerCase().includes("M".toLowerCase()));
  //             "amrit"                          "m"
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="Search"
          type="search"
          style={{ width: "250px", height: "50px", fontSize: "16px" }}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {filteredData.map((todo) => {
          const { id, name } = todo;
          return (
            <div
              style={{
                margin: "10px",
                border: "1px solid #aeaeae",
                width: "200px",
                padding: "10px",
              }}
              key={id}
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
