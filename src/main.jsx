import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./Contexts/CurrentUserContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);
