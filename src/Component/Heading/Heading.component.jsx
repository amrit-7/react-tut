/* eslint-disable react/prop-types */
const HeadingComponent = (props) => {
  const { data } = props;
  return (
    <>
      <h1>{data}</h1>
    </>
  );
};
export default HeadingComponent;
