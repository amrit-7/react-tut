/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import Card from "./Card";
const CardList = (props) => {
  const { data } = props;
 
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
      }}
    >
      {data.map((user) => {
        return <Card key={user.id} cardData={user} />;
      })}
    </div>
  );
};
export default CardList;
