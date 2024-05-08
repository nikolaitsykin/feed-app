import React from "react";
import { AuthContext } from "../context/authContext";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Loader from "../components/UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = React.useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? <PrivateRouter /> : <PublicRouter />;
};

export default AppRouter;
