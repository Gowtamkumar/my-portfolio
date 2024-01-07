import Image from "next/image";
import image from "../../public/gowtamkumar.jpeg";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  const newData = [
    {
      name: "Front-End",
      skills: [
        "JavaScript",
        "ES6",
        "TypeScript",
        "React.js",
        "Next.js",
        "WordPress",
      ],
    },
    {
      name: "Back-End",
      skills: [
        "Node.js",
        "Nest.js",
        "Express.js",
        "PostgreSQL"
      ],
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "NPM", "Postman", "Chrome dev tool", "VsCode"],
    },
  ];

  return (
    <div
      className="md:flex md:w-3/5 p-3 md:m-0 md:mx-auto items-center "
      style={{ height: "88vh" }}
    >
      <div className="md:w-1/5 text-center">
        <Image src={image} placeholder="blur" alt="Gowtam kumar" />
        <div className="flex gap-2 mt-3 items-center justify-around">
          <Link
            href="https://www.linkedin.com/in/gowtamkumar/"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-[22px]" />
          </Link>
          <Link
            href="https://github.com/Gowtamkumar"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="blank"
          >
            <AiFillGithub className="text-[22px]" />
          </Link>
          <Link
            href="https://www.facebook.com/Gowtamkumar17"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="text-[22px]" />
          </Link>
        </div>
        <div className="bg-slate-900 dark:text-slate-400 text-white rounded-lg mt-3">
          <Link href="/Gowtam-kumar-(JavaScript developer).pdf" download={true} target="_blank">
            Download CV
          </Link>
        </div>
      </div>

      <div className="md:w-4/5 md:px-3 overflow-auto">
        <article>
          <h5 className="text-2xl text-black dark:text-white">
            Hey 👋 I,m Gowtam, a Developer
          </h5>
          <p className="justify-center text-slate-400">
            I am a Javascript Developer & Web developer. I have 2 years
            experience. I have completed one more project. I,m genuinely
            passionate about web development. I can continually learn and adapt
            to new challenges. Feel free contract with me, E-mail:
            gowtampaul0@gmail.com
          </p>
          <div className="py-3">
            {newData.map((item, idx) => {
              return (
                <div key={idx} className="gap-1 text-slate-400 ">
                  <strong>{item.name}</strong>:{" "}
                  <span className="me-2 text-slate-400">
                    {item.skills + "," + " "}
                  </span>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}
