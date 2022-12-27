import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { RootState } from "../../store";

export default function DashboardLayout() {
  const dashboard = useSelector((state: RootState) => state.dashboard)

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-row h-full w-full">
        <div className="sm:fixed h-full sm:block hidden">
          <Sidebar />
        </div>
        <div className="sm:ml-[220px] sm:mt-[60px] bg-bgLogin w-full px-8 py-2">
          <Outlet />
        </div>

      </div>
    </div>
  )
}
