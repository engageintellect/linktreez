import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";
import PayMe from "./(components)/PayMe";

import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaMedium,
  FaDiscord,
} from "react-icons/fa";

import { items } from "../data/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center my-10">
          <Avatar />
          <div className="text-xl font-semibold">
            <a href="/">@engage_intellect</a>
          </div>
        </section>

        <PayMe />

        <div className="w-full flex flex-col items-center justify-center pb-10">
          <Card
            title={items.github.title}
            icon={<FaGithub />}
            url={items.github.url}
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
          <Card
            title={items.discord.title}
            icon={<FaDiscord />}
            url={items.discord.url}
          />

          <Card
            title={items.youtube.title}
            icon={<FaYoutube />}
            url={items.youtube.url}
          />
          <Card
            title={items.instagram.title}
            icon={<FaInstagram />}
            url={items.instagram.url}
          />
          <Card
            title={items.medium.title}
            icon={<FaMedium />}
            url={items.medium.url}
          />
          <Card
            title={items.facebook.title}
            icon={<FaFacebook />}
            url={items.facebook.url}
          />
        </div>
      </div>
    </>
  );
}
