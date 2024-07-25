import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user token from local storage
    localStorage.removeItem("token");
    // Redirect to login page
    navigate("/Login", { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
