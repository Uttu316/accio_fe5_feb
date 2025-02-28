import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/auth";

const PrivateRoute = () => {
  const isLogin = isLoggedIn();

  if (isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace={true} />;
};
export default PrivateRoute;
