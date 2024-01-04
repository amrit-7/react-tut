/* eslint-disable react/prop-types */
import Card from "./Card/Card";
const CardList = (props) => {
  const { data } = props;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {data.map((user) => {
        return <Card key={user.id} cardData={user} />;
      })}
    </div>
  );
};
export default CardList;
