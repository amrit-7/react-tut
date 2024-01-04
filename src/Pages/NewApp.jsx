import { useState } from "react";
import data from "../../data.json";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox/SearchBox";
const NewApp = () => {
  const [searchString, setSearchString] = useState("");
  const getDataFromChild = (string) => {
    setSearchString(string);
  };
  const filteredData = data.filter((user) => {
    return user.name.toLowerCase().includes(searchString.toLowerCase());
  });
  return (
    <>
      <SearchBox setSearchString={getDataFromChild} />
      <CardList data={filteredData} />;
    </>
  );
};

export default NewApp;
