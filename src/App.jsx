import { useState } from "react";

const App = () => {
  const [todoString, setTodoString] = useState(""); //IMMUTABLE
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(0);
  const handleChange = (string) => {
    setTodoString(string);
  };
  const handleAddTodo = () => {
    setTodoList([...todoList, { id: count, value: todoString }]);
    setCount(count + 1);
  };
  console.log(todoList);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        placeholder="Write your todo"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <>
        {todoList.map((todo) => {
          const { id, value: item } = todo;
          return (
            <div
              key={id}
              style={{
                boxShadow: "1px 1px 10px red",
                height: "100px",
                width: "200px",
                margin: "10px",
                padding: "10px",
              }}
            >
              {item}
            </div>
          );
        })}
      </>
    </div>
  );
};
export default App;
