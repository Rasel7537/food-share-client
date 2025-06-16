import React, { use } from "react";
import { authContext } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user,loading } = use(authContext);
  // console.log(user);

if(loading){
  return <Loading></Loading>
}

  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
