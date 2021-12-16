import { AiFillCamera } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
import { BsSpeedometer, BsGithub } from "react-icons/bs";
const featuresData = [
  {
    icon: <HiCursorClick />,
    background: "bg-green-500",
    title: "Easy UI",
    desc: `Something about solving Something about solving Something about solving Something about solving Something about solving Something about solving`,
  },
  {
    icon: <AiFillCamera />,
    background: "bg-red-500",
    title: "Camera",
    desc: `Just show your unsolved cube in the webcam and our program will recognize its faces and provide the solution, instead of manually entering cube's sides.`,
  },

  {
    title: "Fast",
    icon: <BsSpeedometer />,
    background: "bg-cyan-600",
    desc: `Something about solving Something about solving Something about solving Something about solving Something about solving Something about solving`,
  },
  {
    title: "Open-sourced",
    icon: <BsGithub />,
    background: "bg-white",
    color: "text-black",
    desc: `Something about solving Something about solving Something about solving Something about solving Something about solving Something about solving`,
  },
];
export default featuresData;
