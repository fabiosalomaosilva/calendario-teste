import { useSelector } from 'react-redux';
import logo from '../../assets/logo-branco-hor.png';
import logoBranco from '../../assets/logo-branco.png';
import { RootState } from '../../store';
import { MdMenu } from "react-icons/md";
import { RiDashboardFill, RiBarChart2Fill, RiDoorClosedFill } from "react-icons/ri"
import SideBarItem from '../SideBarItem';
import { FcCalendar } from 'react-icons/fc';


export interface SidebarLayoutProps {
  children?: React.ReactNode;
}

export default function Sidebar(props: SidebarLayoutProps) {
  const dashboard = useSelector((state: RootState) => state.dashboard)

  return (
    <div className="w-[220px] bg-primary h-full flex flex-col">
      <div className="top-0 py-2 w-[220px] flex flex-col items-center justify-center">
        <FcCalendar />
      </div>
      <div className="w-full h-full grid content-between gap-2">
        <div>
          <SideBarItem href="/dashboard" text="Home" icon={<RiDashboardFill className="h-6 w-6" />} />
          <SideBarItem href="/resultados" text="Resultados" icon={<RiBarChart2Fill className="h-6 w-6" />} />
        </div>
        <div>
          <SideBarItem href="/auth/login" text="Sair" icon={<RiDoorClosedFill className="h-6 w-6" />} />
        </div>
      </div>
    </div>
  );
}
