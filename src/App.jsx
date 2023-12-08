import { useState } from "react";

const App = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultValues);
  const [isLoading, setIsLoading] = useState(false);
  const { email, password } = formFields;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    setIsLoading(true);
    // api
    setTimeout(() => {
      console.log(formFields);
      setFormFields(defaultValues);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
      onSubmit={handleSubmit}
    >
      <input
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="email"
      />
      <br />
      <input
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="password"
      />
      <br />
      <button disabled={isLoading}>
        {isLoading ? "Loading...." : "Submit"}
      </button>
    </form>
  );
};

export default App;
