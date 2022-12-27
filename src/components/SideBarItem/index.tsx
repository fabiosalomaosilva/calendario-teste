import { useCallback, useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export interface SideBarItemProps {
  href: string;
  text: string;
  icon: JSX.Element;
}
export default function SideBarItem(props: SideBarItemProps) {
  const [urlActive, setUrlActive] = useState<string>('text-teal-50 hover:bg-teal-50 hover:text-primary');
  const location = useLocation();

  useEffect(() => {
    const urlPath = location.pathname;
    if (props.href === urlPath) {
      setUrlActive('bg-bgLogin text-primary');
    } else {
      setUrlActive('text-teal-50 hover:bg-teal-500');
    }
  }, [location.pathname])


  return (
    <Link to={props.href} className="text-teal-600 font-semibold">
      <div className={`py-3 px-4 flex flex-row w-full gap-3  cursor-pointer ease-in transition-all duration-100 ${urlActive}`}>
        <i className={urlActive}>{props.icon}</i>
        {props.text}
      </div>
    </Link>
  );
}
