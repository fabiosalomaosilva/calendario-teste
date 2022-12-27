import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo-hor.png';
import icone from '../../assets/logo.png';
import { RootState } from '../../store';
import { setToggleSideBar } from '../../store/dashboardSlice';
import Avatar, { ItemDropDownAvatar } from '../Avatar';
import logoBranco from '../../assets/logo-branco-hor.png';


export default function Header() {
  const user = useSelector((state: RootState) => state.dashboard.user)
  const dispatch = useDispatch();
  const linksAvatar: ItemDropDownAvatar[] = [
    { title: 'Dashboard', route: '/dashboard' },
    { title: 'Resultados', route: '/resultados' },
    { title: 'Sair', route: '/auth/login' },

  ]
  return (
    <header className="z-200 sm:fixed h-[60px] sm:pl-[250px] bg-bgLogin w-full">
      <div className="flex flex-row h-[60px] pr-3 items-center justify-between space-x-4 z-201  p-0">
        {/* <img src={logo} width="130" className="flex" /> */}
        <div></div>
        <div className="flex flex-row h-[60px] items-center">
          <span className="font-semibold text-secondary mr-3">{user.name}</span>
          <Avatar url={user?.photoUrl} size={40} itens={linksAvatar} />
        </div>
      </div>
    </header>
  );
}
