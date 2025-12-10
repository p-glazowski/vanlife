import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthContext } from "../providers/AuthProvider";

export default function ProtectedRoute() {
  const { user } = useAuthContext();
  const location = useLocation();

  return user.email ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ auth: "Please login first!", from: location }}
      replace
    />
  );
}
