import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/auth";

const ProtectedRoute = () => {
  const isLogin = isLoggedIn();

  if (!isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/" replace={true} />;
};
export default ProtectedRoute;
