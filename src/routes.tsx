import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./pages/dashboardLayout";
import { Erro404 } from "./pages/erros/Erro404";
import { Login } from "./pages/login";
import ProtectedRoutes from "./pages/protectedRoutes";
import { RootState } from "./store";
import { logout } from "./store/dashboardSlice";

const AppRoutes = () => {
  const isAuthenticate = useSelector(
    (state: RootState) => state.dashboard.isAuthenticate
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [isAuthenticate]);

  return (
    <div className="w-full h-screen">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/404" element={<Erro404 />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
