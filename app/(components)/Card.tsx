import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  url: string;
  icon: any;
};

export default function Card({
  title,
  url,
  icon,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="group transition-color bg-zinc-800/50 duration-300 w-full rounded-lg shadow-lg flex items-center justify-between"
        rel="noreferrer"
      >
        <div className="px-5 md:px-10 text-l transition-transform duration-300 md:group-hover:scale-110">
          {title}
        </div>

        <div className="flex items-center group-hover:shadow-lg transition-all duration-200 md:group-hover:bg-zinc-700/50 justify-center h-16 w-20 m-2 rounded-lg mask mask-squircle px-5 md:px-10">
          <div className="text-4xl md:group-hover:scale-[120%] transition-transform duration-500">
            {icon}
          </div>
        </div>
      </a>
    </>
  );
}
