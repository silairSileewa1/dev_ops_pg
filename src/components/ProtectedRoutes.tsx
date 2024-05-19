import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = ({ user }: { user: any }) => {
  return user === null ? <p>This is a protected route</p> : <Outlet />;
};

export default ProtectedRoutes;
