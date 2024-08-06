import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate('/login');
    return null;
  }

  return element;
};

export default ProtectedRoute;
