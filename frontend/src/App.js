import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
// import MovieDetails from "./MovieDetails";
// import Register from "./Register";

const ProtectedRoute = ({ element }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/login');
    return null;
  }
  return element;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<HomePage />}  />
        {/* <Route path="/movie/:id" element={<ProtectedRoute element={<MovieDetails />} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
