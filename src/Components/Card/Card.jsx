import { useNavigate } from "react-router";
/* eslint-disable react/prop-types */
const Card = (props) => {
  const { cardData } = props;
  const navigate = useNavigate();
  const handleNavigateToDetails = (id) => {
    navigate(`${id}`);
  };
  return (
    <div key={cardData.id} onClick={() => handleNavigateToDetails(cardData.id)}>
      <div>
        <img
          src={`https://robohash.org/${cardData.id}?set=set2&size=180x180`}
        />
      </div>
      <h3>{cardData.name}</h3>
      <p>{cardData.email}</p>
    </div>
  );
};
export default Card;
