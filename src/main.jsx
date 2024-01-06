import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
import { UserProvider } from "./Contexts/CurrentUser";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);
