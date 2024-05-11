import React from "react";
import { AuthContext } from "../context/authContext";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const { isAuth } = React.useContext(AuthContext);

  return isAuth ? <PublicRouter /> : <PrivateRouter />;
};

export default AppRouter;
