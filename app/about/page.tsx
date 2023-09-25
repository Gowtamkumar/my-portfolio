import Image from "next/image";
import image from "../../public/gowtamkumar.jpeg";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About() {
  const newData = [
    {
      name: "Front-End",
      skills: [
        "Html5",
        "CSS3",
        "JavaScript",
        "ES6",
        "TypeScript",
        "React.js",
        "Next.js",
        "React Native",
      ],
    },
    {
      name: "Back-End",
      skills: [
        "Node.js",
        "Nest.js",
        "Express.js",
        "PostgreSQL.js",
        "MYSQL",
        "MongoDB",
      ],
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "NPM", "Postman", "Chrome dev tool", "VsCode"],
    },
  ];

  return (
    <div
      className="md:flex w-4/5 mx-auto items-center"
      style={{ height: "88vh" }}
    >
      <div className="flex-1">
        <Image src={image} width={400} height={300} alt="Gowtam kumar" />
      </div>
      <div className="flex-1">
        <article>
          <h5 className="text-4xl text-black dark:text-white">
            Hey 👋 I,m Gowtam,
          </h5>
          <p className="text-4xl my-4 dark:text-white">
            a
            <span className="dark:bg-slate-900 bg-slate-400 p-1 m-4 bg-opacity-100 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 rounded-2xl default-transition default-focus">
              developer
            </span>
          </p>
          <p className="justify-center text-slate-400">
            I am a Javascript Developer & Mobile Application developer. I have 2
            years Experience. I have completed one more project. I,m genuinely
            passionate about web development.I can continually learn and adapt
            to new challenges
          </p>
          <div className="py-3">
            {newData.map((item, idx) => {
              return (
                <div key={idx} className="gap-1 text-slate-400 ">
                  {item.name}:{" "}
                  <span className="me-2 text-slate-400">
                    {item.skills + "," + " "}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-2">
            <Link
              href="https://www.linkedin.com/in/gowtamkumar/"
              className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              href="https://github.com/Gowtamkumar"
              className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
              target="blank"
            >
              <AiFillGithub />
            </Link>
            <Link
              href="https://www.facebook.com/Gowtamkumar17"
              className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </Link>
          </div>
          {/* <div className="mt-1">
              <Link to="{resume}" target="_blank" download>
                <button className="btn banner-button text-light">Download Resume</button>
              </Link>&nbsp;&nbsp;
            </div> */}
        </article>
      </div>
    </div>
  );
}
