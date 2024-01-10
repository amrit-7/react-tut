/* eslint-disable react/prop-types */
import Card from "./Feature";
const FeatureList = ({ data }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: 5,
        margin: "5px",
      }}
    >
      {data.map((element) => {
        const { id } = element;
        return (
          <div key={id} style={{ margin: "5px", gap: 4 }}>
            <Card data={element} />
          </div>
        );
      })}
    </div>
  );
};
export default FeatureList;
