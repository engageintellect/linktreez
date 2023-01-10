import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";

import Image from "next/image";
import { items } from "../data/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <section className="my-10 flex flex-col items-center justify-center">
          <Avatar />
          <div>
            <a href="/">@engage_intellect</a>
          </div>
        </section>

        <Card
          title={items.github.title}
          description={items.github.description}
          url={items.github.url}
        />
        <Card
          title={items.twitter.title}
          description={items.twitter.description}
          url={items.github.url}
        />
        <Card
          title={items.youtube.title}
          description={items.youtube.description}
          url={items.github.url}
        />
        <Card
          title={items.youtube.title}
          description={items.youtube.description}
          url={items.github.url}
        />
      </div>
    </>
  );
}
