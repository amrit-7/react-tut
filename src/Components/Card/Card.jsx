/* eslint-disable react/prop-types */
const Card = (props) => {
  const { cardData } = props;
  return (
    <div key={cardData.id}>
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
