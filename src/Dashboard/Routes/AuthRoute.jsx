import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  let user = null;
  try {
    const token = localStorage.getItem("token");
    if (token) {
      user = jwtDecode(token);
    }
  } catch (error) {
    console.error("Failed to decode token:", error);
  }

  if (user) {
    return <Navigate to="/Dashboard" replace />;
  }
  return children;
};

export default AuthRoute;
