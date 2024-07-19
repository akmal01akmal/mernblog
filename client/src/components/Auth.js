import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("token"));
  if (auth) {
    if (auth.token) {
      return children;
    }
  }
  return <Navigate to="/" />;
};
export default PrivateRoute;
