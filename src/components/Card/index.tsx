export interface CardPorps {
    colSpan?: number;
    title?: string;
    color?: 'primary' | 'white' | 'danger' | 'warning';
    children?: JSX.Element;
  }
  
  export default function Card(props: CardPorps) {
  
    const color = `bg-${props.color ?? 'primary'}`;
    const colorText = props.color !== 'white' ? 'text-gray-50' : 'text-gray-500';
    const colSpan = `xl-col-span-${props.colSpan ?? 4} lg:col-span-4 md:6 sm:col-span-12 col-span-12`;
  
    return (
      <div className={`${colSpan} min-h-20 rounded ${color} shadow-lg p-5`}>
        <div className={`uppercase text-md font-bold ${colorText} mb-5`}>
          {props.title}
        </div>
        {props.children}
      </div>
    );
  }
  