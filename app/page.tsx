import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";
import FeaturedCard from "./(components)/FeaturedCard";
import PayMe from "./(components)/PayMe";

import {
  FaGlobe,
  FaBlog,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaDiscord,
  FaNewspaper,
  FaChartArea,
  FaLaptop,
  FaRobot,
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
              <div className="text-zinc-500 text-center" key={index}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <PayMe />

        <div className="w-full flex flex-col items-center justify-center pb-10">
          <Card
            title={items.homepage.title}
            icon={<FaGlobe />}
            url={items.homepage.url}
          />
          <Card
            title={items.github.title}
            icon={<FaGithub />}
            url={items.github.url}
          />
          <Card
            title={items.blog.title}
            icon={<FaNewspaper />}
            url={items.blog.url}
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
