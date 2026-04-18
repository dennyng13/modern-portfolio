import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://instagram.com/dennyng13",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/dennyng13",
    Icon: RiFacebookLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/dennyng13",
    Icon: RiDribbbleLine,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@dennyng13",
    Icon: RiYoutubeLine,
  },
  {
    name: "Github",
    link: "https://github.com/dennyng13",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg text-primary/80">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent text-white rounded-full p-[5px] hover:bg-sunrise"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
