import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import TitlePage from "../../components/TitlePage";
import { RootState } from "../../store";
import { logout } from "../../store/dashboardSlice";
import { TbRefresh } from "react-icons/tb";

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.dashboard.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-full">
      <TitlePage>Dashboard</TitlePage>
      <div className="grid grid-cols-12 gap-4">
        <Card colSpan={3} color="white" title="Último resultado">
          <div className="flex flex-col"></div>
        </Card>
        <Card colSpan={3} color="white" title="Último resultado">
          <div className="flex flex-col"></div>
        </Card>
        <Card colSpan={3} color="primary" title="Mais repetidos">
          <div className="flex flex-row justify-between"></div>
        </Card>
      </div>
      <br />
      <br />
      <h1>{user.email}</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
