import React from "react";
import { Route, Navigate } from "react-router-dom";
import Contatos from "../pages/Contatos";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? (
    <Route path={"/minha-lista"} element={<Contatos />} />
  ) : (
    <Navigate to="/404" replace />
  );
};

export default PrivateRoute;
