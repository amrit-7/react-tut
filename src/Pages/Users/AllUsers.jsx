import { Link } from "react-router-dom";

const AllUsers = () => {
  return (
    <div>
      <h1>All User</h1>
      <Link to="mens">Mens</Link>
      <Link to="womens">
        <button>Women&apos;s</button>
      </Link>
      <Link to="/shop/kids">
        <button>Kids</button>
      </Link>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default AllUsers;
