import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";
import PayMe from "./(components)/PayMe";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaChartLine,
  FaNewspaper,
  FaCode,
  FaChartArea,
  FaLaptop,
  FaRobot,
  FaShoppingCart,
} from "react-icons/fa";

import { items, tagline } from "../data/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <section className="flex flex-col items-center gap-5 justify-center my-10">
          <Avatar />
          <div className="text-2xl font-semibold">
            <a href="/">@engage_intellect</a>
          </div>

          <div className="text-zinc-500 flex justify-between gap-5">
            {tagline.map((item, index) => (
              <div
                className="text-zinc-500 text-sm text-center font-thin"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <PayMe />

        <div className="w-full flex gap-2 my-2 flex-col items-center justify-center pb-2 lg:pb-10">
          <Card
            title={items.github.title}
            icon={<FaGithub />}
            url={items.github.url}
          />
          <Card
            title={items.projects.title}
            icon={<FaCode />}
            url={items.projects.url}
          />
          <Card
            title={items.articles.title}
            icon={<FaNewspaper />}
            url={items.articles.url}
          />
          <Card
            title={items.stonkai.title}
            icon={<FaChartLine />}
            url={items.stonkai.url}
          />

          <Card
            title={items.greymatter.title}
            icon={<FaShoppingCart />}
            url={items.greymatter.url}
          />
          <Card
            title={items.engage_gpt.title}
            icon={<FaRobot />}
            url={items.engage_gpt.url}
          />
          <Card
            title={items.rugged_development.title}
            icon={<FaLaptop />}
            url={items.rugged_development.url}
          />
          <Card
            title={items.crypto_dashboard.title}
            icon={<FaChartArea />}
            url={items.crypto_dashboard.url}
          />
          <Card
            title={items.medium.title}
            icon={<FaMedium />}
            url={items.medium.url}
          />
          <Card
            title={items.instagram.title}
            icon={<FaInstagram />}
            url={items.instagram.url}
          />
          <Card
            title={items.twitter.title}
            icon={<FaTwitter />}
            url={items.twitter.url}
          />
        </div>
      </div>
    </>
  );
}
