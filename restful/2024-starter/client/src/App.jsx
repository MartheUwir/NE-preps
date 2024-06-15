import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { PrivateRoute, PublicRoute } from "./utils/Route";
import { Owners } from "./pages/Owners";
import { Logout } from "./pages/Logout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" exact element={<PublicRoute element={Login} />} />
          <Route
            path="/login"
            exact
            element={<PublicRoute element={Login} />}
          />
          <Route
            path="/signup"
            exact
            element={<PublicRoute element={SignUp} />}
          />

          <Route
            path="/owners"
            exact
            element={<PrivateRoute element={Owners} />}
          />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
