"use client";
import { menu } from "@/mockData/route";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion-3d";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Home() {
  return (
    <main className="p-4">
      <section
        className="flex items-center justify-center"
        style={{ height: "85vh" }}
      >
        <div className="text-center">
          <h1 className="text-6xl text-black dark:text-white">
            Hey 👋 I,m Gowtam,
          </h1>
          <p className="text-6xl my-4 dark:text-white">
            a
            <span className="dark:bg-slate-900 bg-slate-400 text-[50px] p-1 m-4 bg-opacity-100 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200 rounded-2xl default-transition default-focus">
              <Typewriter
                words={["JavaScript Developer", "React Native Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="mt-4 dark:text-slate-400">
            I am a Javascript Developer & React Native developer
          </p>

          {/* <div className="flex gap-2 mt-3">
          <Link
            href="https://www.linkedin.com/in/gowtamkumar/"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-[25px]" />
          </Link>
          <Link
            href="https://github.com/Gowtamkumar"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="blank"
          >
            <AiFillGithub className="text-[25px]" />
          </Link>
          <Link
            href="https://www.facebook.com/Gowtamkumar17"
            className="bg-slate-900 hover:bg-slate-400 p-2 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook className="text-[25px]" />
          </Link>
        </div> */}
          <div className="md:flex mx-auto mt-2 items-center justify-center gap-2">
            {menu.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="dark:text-white dark:bg-slate-900 ring-offset-1 ring-1 hover:bg-slate-400 rounded p-2  bg-opacity-15 backdrop-filter backdrop-blur-sm filter saturate-200 text-primary-200  default-transition default-focus mt-5"
                >
                  <Link href={`${item.url}`}>
                    <span className="flex items-center justify-center">
                      {item.icon} {item.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
