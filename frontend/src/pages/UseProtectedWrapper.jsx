import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log("No token found");
      navigate("/login");
    }
  }, [token, navigate]);

  return <div>{children}</div>;
};

export default UseProtectedWrapper;
