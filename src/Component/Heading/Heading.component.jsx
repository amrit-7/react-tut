const HeadingComponent = (props) => {
  console.log(
    "🚀 ~ file: Heading.component.jsx:2 ~ HeadingComponent ~ props:",
    props.data
  );
  return (
    <>
      <h1>{props.data}</h1>
    </>
  );
};
export default HeadingComponent;
