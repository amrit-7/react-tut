import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Link to={"mens"}>Mens</Link>
      <Link to="womens">Womens</Link>
      <p>Kids</p>
    </>
  );
};

export default Shop;
