import { useState } from "react";
import data from "../data.json";
// import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList";
import { Link } from "react-router-dom";
const NewApp = () => {
  const [searchString, setSearchString] = useState("");
  const getDataFromChild = (string) => {
    setSearchString(string);
  };
  const filteredData = data.filter((user) => {
    return user.name.toLowerCase().includes(searchString.toLowerCase());
  });
  // const [cartItems, setCartItems] = useState([]);
  // const handleAddToCart = (data) => {
  //   const existingDataIndex = cartItems.findIndex(
  //     (item) => item.id === data.id
  //   );
  //   if (existingDataIndex !== -1) {
  //     const updatedCartItems = [...cartItems];
  //     updatedCartItems[existingDataIndex];
  //     setCartItems(updatedCartItems);
  //   } else {
  //     setCartItems([...cartItems, { ...data }]);
  //   }
  // };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      }}
    >
      <div style={{ marginTop: "30px" }}>
        <SearchBox setSearchString={getDataFromChild} />
        <Link to={"/emp"}>
          <button> See Employees</button>
        </Link>
      </div>
      <CardList data={filteredData} />
      {/* {filteredData.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <button onClick={() => handleAddToCart(user)}>add</button>
          </div>
        );
      })} */}
    </div>
  );
};

export default NewApp;
