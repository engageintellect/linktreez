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
        className="my-2 group transition-color duration-300 hover:bg-neutral-content bg-base-100 h-20 w-full sm:w-[66vw] md:w-[50vw] xl:w-[33vw] rounded-lg shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center group-hover:shadow-lg justify-center h-16 bg-neutral w-20 m-2 rounded-lg">
          <div className="text-4xl md:group-hover:scale-[120%] transition-transform duration-500">
            {icon}
          </div>
        </div>
        <div className="px-10 text-xl group-hover:font-semibold group-hover:text-neutral md:group-hover:-translate-x-5 transition-transform duration-300">
          {title}
        </div>
      </a>
    </>
  );
}
