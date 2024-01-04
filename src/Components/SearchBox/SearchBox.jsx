/* eslint-disable react/prop-types */
const SearchBox = (props) => {
  const { setSearchString } = props;
  const handleChange = (e) => {
    setSearchString(e.target.value);
  };
  return <input placeholder="Search" onChange={handleChange} />;
};
export default SearchBox;
