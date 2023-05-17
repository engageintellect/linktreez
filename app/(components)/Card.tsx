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
        className="my-2 group transition-color bg-zinc-800/50 duration-300 h-20 w-full rounded-lg shadow-lg flex items-center justify-between"
        rel="noreferrer"
      >
        <div className="px-10 text-l font-bold transition-transform duration-300">
          {title}
        </div>

        <div className="flex items-center group-hover:shadow-lg transition-all duration-200 md:group-hover:bg-zinc-700/50 justify-center h-16 w-20 m-2 rounded-lg mask mask-squircle">
          <div className="text-4xl md:group-hover:scale-[120%] transition-transform duration-500 px-10">
            {icon}
          </div>
        </div>
      </a>
    </>
  );
}
