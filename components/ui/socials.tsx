import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import Button from "./button";

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <p className="w-7 h-7 grid place-items-center">{social.icon}</p>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaGithub className="w-4 h-4" />,
    link: "https://github.com/ampta",
    username: "Shivam Gupta",
  },
  {
    icon: <FaInstagram className="w-4 h-4" />,
    link: "https://www.instagram.com/ampta_/",
    username: "Shivam Gupta",
  },
  {
    icon: <FaLinkedin className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/shivam-gupta-123641191",
    username: "Shivam Gupta",
  },
  {
    icon: <SiUdemy className="w-4 h-4" />,
    link: "https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/",
    username: "Shivam Gupta",
  },
];
