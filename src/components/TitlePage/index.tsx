export interface TitlePageProps {
  children: string;
}
export default function TitlePage(props: TitlePageProps) {
  return (
    <h1 className="text-teal-600 text-4xl mb-4 -mt-2">{props.children}</h1>
  );
}
