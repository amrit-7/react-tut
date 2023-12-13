/* eslint-disable no-unused-vars */
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  console.log("🚀 ~ file: App.jsx:6 ~ App ~ todos:", todos);
  const [stringValue, setStringValue] = useState("");
  const handleTodoChange = (e) => {
    setStringValue(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, stringValue]);
    setStringValue("");
  };
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          value={stringValue}
          placeholder="Enter Todo"
          onChange={handleTodoChange}
        />
        <button>Add Todo</button>
      </form>
      {todos.map((todo, index) => {
        return (
          <div key={index} style={{ border: "1px solid red", width: "200px" }}>
            {todo}
          </div>
        );
      })}
    </>
  );
};

export default App;

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   console.log("🚀 ~ file: App.jsx:29 ~ App ~ todos:", todos);
//   const [stringValue, setStringValue] = useState("");
//   const [count, setCount] = useState(0);
//   const handleTodoChange = (e) => {
//     setStringValue(e.target.value);
//   };
//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     setTodos([...todos, { id: count, value: stringValue }]);
//     setCount(count + 1);
//   };
//   return (
//     <>
//       <form onSubmit={handleAddTodo}>
//         <input placeholder="Enter Todo" onChange={handleTodoChange} />
//         <button>Add Todo</button>
//       </form>
//       {/* {todos} */}
//     </>
//   );
// };

// export default App;
