import FeatureList from "./FeatureList";
import fruitsData from "./FeatureData.json";
const FeatureSection = ({ isfor, data }) => {
  return (
    <div className="container-fluid py-5">
      <h3> `Our ${isfor}`</h3>
      <buttons />
      <div className="row g-4">
        <FeatureList data={fruitsData} />
      </div>
    </div>
  );
};

export default FeatureSection;
