import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log("🚀 ~ file: HomePage.jsx:8 ~ getData ~ data:", data);
    };
    getData();
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
