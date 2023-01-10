import { type PropsWithChildren } from "react";

import Avatar from "./Avatar";
import CardIcon from "./CardIcon";

type CardProps = {
  title: string;
  image?: string;
  description: string;
  button_label?: string;
  url: string;
};

export default function Card({
  title,
  image,
  description,
  button_label,
  url,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className="my-2 bg-base-100 h-32 w-full sm:w-[33vw] rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center justify-center h-28 bg-base-200 w-24 m-2 rounded-lg">
          <div>
            <CardIcon />
          </div>
        </div>
        <div className="px-10 text-3xl">{title}</div>
      </div>
    </>
  );
}
