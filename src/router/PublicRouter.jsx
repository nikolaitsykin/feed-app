import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes";

const PublicRouter = () => {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exaxt}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<Navigate to="/login" />}/>
      </Routes>
    </div>
  );
};

export default PublicRouter;
