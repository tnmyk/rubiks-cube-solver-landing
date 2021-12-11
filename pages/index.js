import Nav from "../components/Nav";
import { AiFillGithub } from "react-icons/ai";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <h1 className="font-bold text-8xl mt-32">Rubik's Cube Solver</h1>
      <h3 className="text-2xl mt-5">Made by group 16 members</h3>
      <div className="flex gap-x-3">
        <button className="p-3 w-56 font-medium text-lg rounded bg-green-500 mt-10">
          View product
        </button>
        <button className="p-2 w-56 font-medium text-lg rounded border mt-10 flex justify-center items-center gap-x-2">
          View Source code <AiFillGithub />
        </button>
      </div>
    </div>
  );
}
