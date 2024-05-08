import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "../routes";

const PrivateRouter = () => {
  return (
    <div>
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exaxt}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<Navigate to="/posts" />} />
      </Routes>
    </div>
  );
};

export default PrivateRouter;
