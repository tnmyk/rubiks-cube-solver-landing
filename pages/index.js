import Nav from "../components/Nav";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
import Tech from "../components/Home/Tech";
import Team from "../components/Home/Team";
import Footer from "../components/Footer/Footer";
import Features from "../components/Home/Features";
import HowToUse from "../components/Home/HowToUse";
import { BiCubeAlt } from "react-icons/bi";
export default function Home() {
  return (
    <div className="flex flex-col items-center px-8">
      <h1 className="font-bold md:text-7xl mt-32 text-5xl">
        Rubik's Cube Solver{" "}
        <BiCubeAlt style={{ display: "inline", fontSize: "5rem" }} />
      </h1>
      <h3 className="text-2xl mt-5 text-gray-400">Made by group x members</h3>
      <div className="flex flex-wrap justify-center mt-10 gap-x-3 gap-y-2">
        <button className="p-3 w-56 font-medium text-lg rounded bg-green-500 flex justify-center items-center gap-x-2">
          View product <BsArrowRight />
        </button>
        <button className="p-3 w-56 font-medium text-lg rounded border flex justify-center items-center gap-x-2">
          View Source code <AiFillGithub />
        </button>
      </div>
      <Features />
      <HowToUse />
      <Tech />
      <Team />
    </div>
  );
}
