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
        className="my-2 group transition-color duration-300 focus:bg-zinc-900 sm:hover:bg-zinc-900 bg-zinc-800 h-20 w-full sm:w-[66vw] md:w-[50vw] xl:w-[33vw] rounded-lg shadow-lg flex items-center justify-between"
        rel="noreferrer"
      >
        <div className="flex items-center sm:group-hover:shadow-lg justify-center h-16 bg-zinc-800 w-20 m-2 rounded-lg">
          <div className="text-4xl md:group-hover:scale-[120%] transition-transform duration-500">
            {icon}
          </div>
        </div>

        <div className="px-10 text-xl sm:group-hover:font-semibold md:group-hover:-translate-x-5 transition-transform duration-300">
          {title}
        </div>
      </a>
    </>
  );
}
