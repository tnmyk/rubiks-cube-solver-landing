import Nav from "../components/Nav";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
export default function Home() {
  return (
    <div className="flex flex-col items-center px-8">
      <Nav />
      <h1 className="font-bold text-8xl mt-32">Rubik's Cube Solver</h1>
      <h3 className="text-2xl mt-5 text-gray-400">Made by group 16 members</h3>
      <div className="flex gap-x-3">
        <button className="p-3 w-56 font-medium text-lg rounded bg-green-500 mt-10 flex justify-center items-center gap-x-2">
          View product <BsArrowRight />
        </button>
        <button className="p-2 w-56 font-medium text-lg rounded border mt-10 flex justify-center items-center gap-x-2">
          View Source code <AiFillGithub />
        </button>
      </div>
      <div className="">
        <h1 className="text-3xl font-medium mt-24 text-gray-300">Features</h1>
      </div>
      <div className="flex gap-4 flex-wrap px-10 w-full justify-center mt-5">
        {[1, 2, 1].map((a) => {
          return (
            <div
              style={{ minHeight: "15rem" }}
              className="flex flex-col gap-y-5 items-center p-5 border rounded border-gray-500 w-1/3"
            >
              <div className="font-medium text-xl">Solve</div>
              <div className="w-full text-center font-medium text-gray-400">
                Something about solving Something about solving Something about
                solving Something about solving Something about solving
                Something about solving
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <h1 className="text-3xl font-medium mt-24 text-gray-300">Team</h1>
      </div>
      <div className="flex gap-5 flex-wrap px-10 w-full justify-center mt-5">
        {[1, 2, 1, 1, 1].map((a) => {
          return (
            <div
              style={{ minHeight: "15rem" }}
              className="flex flex-col gap-y-5 items-center p-5 border rounded border-gray-500 w-1/4"
            >
              <div className="font-medium text-xl">Solve</div>
              <div className="w-full text-center font-medium text-gray-400">
                Something about solving Something about solving Something about
                solving Something about solving Something about solving
                Something about solving
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
