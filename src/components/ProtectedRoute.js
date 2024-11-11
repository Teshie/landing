import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const currentTime = new Date().getTime();
  const twoMinutes = 2 * 60 * 1000; // 2 minutes in milliseconds

  if (!user || currentTime - user.loginTime > twoMinutes) {
    // If user is not logged in or 2 minutes have passed, remove user data
    localStorage.removeItem("user");
    return <Navigate to="/" replace />;
  }

  return children; // If valid, render the protected component
};
