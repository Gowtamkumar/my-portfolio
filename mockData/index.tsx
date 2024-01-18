import {
  AiOutlineEdit,
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";

import image from "../public/gowtamkumar.jpeg";
import carDealer from "../public/projects/car-dealer.png";

export const menu = [
  {
    name: "Home",
    url: "/",
    icon: <AiOutlineHome className="me-2 h-5 w-5 text-2xl" />,
  },
  {
    name: "Projects",
    url: "/projects",
    icon: <AiOutlineFundProjectionScreen className="me-2 h-5 w-5 text-2xl" />,
  },
  {
    name: "About",
    url: "/about",
    icon: <AiOutlineProfile className="me-2 h-5 w-5 text-2xl" />,
  },

  // {
  //   name: "Blog",
  //   url: "/blogs",
  //   icon: <AiOutlineEdit className="me-2 h-5 w-5 text-2xl" />,
  // },
  // {
  //   name: "GitHub",
  //   url: "https://github.com/Gowtamkumar",
  //   icon: <AiOutlineGithub className="me-2 h-5 w-5 text-2xl" />,
  // },
];

export const projects = [
  {
    name: "Car Dealer",
    img: carDealer,
    sourceCode: "https://github.com/gowtamkumar/car-dealer",
    url: "",
    description:
      "The Car Enthusiast Hub is a web application designed for automotive enthusiasts to explore, share, and engage with their passion for cars. This platform provides a central hub for users to access a variety of features related to cars, including information about different car models.",
    tech: [
      "Nextjs",
      "Tailwind CSS",
      "Ant Design",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
    ],
  },
  {
    name: "Project Heading 1",
    img: image,
    sourceCode: "",
    url: "",
    description: "Trust Home Clener is cleaner service holder.",
    tech: ["HTML", "CSS", "JavaScript", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    name: "Project Heading 3",
    img: image,
    sourceCode: "",
    url: "",
    description: "Trust Home Clener is cleaner service holder.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
];
