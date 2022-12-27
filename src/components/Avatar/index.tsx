import { useState } from "react";
import { Link } from "react-router-dom";

export interface AvatarProps {
  url?: string;
  size: number;
  itens: ItemDropDownAvatar[];
}
export interface ItemDropDownAvatar {
  title: string;
  route: string;
}
export default function Avatar(props: AvatarProps) {
  const [status, setStatus] = useState(false);
  const [itens, setItens] = useState<ItemDropDownAvatar[]>(props.itens ?? []);

  const handleShow = () => {
    setStatus(true);
  }
  const handleHidden = () => {
    setStatus(false);
  }
  return (
    <div onMouseLeave={handleHidden}>
      <button className="outline-none" onClick={handleShow}>
        <img src={props.url} width={props.size} className="rounded-full sm:block mt-2" alt="avatar" referrerPolicy="no-referrer" />
      </button>
      <div className="flex flex-col min-w-20 border-2 border-gray-200 shadow-lg z-100 bg-white min-h-5 right-0 top-13 absolute">
        {
          itens?.length > 0 && status &&
          itens.map(item => {
            return (
              <Link to={item.route} onClick={handleHidden} className="px-5 min-w-[180px] py-2 border-['1px'] hover:bg-gray-200">{item.title}</Link>
            )
          })}
      </div>
    </div>
  );
}
