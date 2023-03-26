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
        className="my-2 group transition-color duration-300 hover:bg-zinc-600 bg-zinc-500 h-40 w-full max-w-2xl rounded-lg shadow-lg flex items-center justify-between"
        rel="noreferrer"
      >
        <div className="flex items-center group-hover:shadow-lg justify-center h-16 bg-zinc-800 w-20 m-2 rounded-lg">
          <div className="text-4xl md:group-hover:scale-[120%] transition-transform duration-500">
            {icon}
          </div>
        </div>

        <div className="px-10 text-xl group-hover:font-semibold md:group-hover:-translate-x-5 transition-transform duration-300">
          {title}
        </div>
      </a>
    </>
  );
}
