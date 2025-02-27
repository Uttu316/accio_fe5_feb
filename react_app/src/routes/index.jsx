import { Navigate, Outlet } from "react-router";
import { isLoggedIn } from "../utils/auth";

export const PrivateRoute = () => {
  const isLogin = isLoggedIn();

  if (isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace={true} />;
};

export const ProtectedRoute = () => {
  const isLogin = isLoggedIn();

  if (!isLogin) {
    return <Outlet />;
  }
  return <Navigate to="/" replace={true} />;
};
