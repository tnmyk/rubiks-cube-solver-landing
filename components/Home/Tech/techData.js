import { SiOpencv, SiPython } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { HiOutlineCube } from "react-icons/hi";
const techData = [
  {
    logo: <SiOpencv />,
    title: `Open CV`,
    desc: `Using OpenCV to scan the Rubik cube's initial state.​`,
  },
  {
    logo: <SiPython />,
    title: `Python (tkinter)`,
    desc: `Using Tkinter to develop a UI to provide an easy experience to the user while accessing the various features of the program​`,
  },
  {
    logo: <GrReactjs />,
    title: `React.js`,
    desc: `Downloadable application and support for the project provided online using React.js​ (Next.js) `,
  },
  {
    logo: <HiOutlineCube />,
    title: `Kociemba's Algorithm`,
    desc: `Using Kociemba Algorithm​ which reduces the required moves to solve the cube into a maximum of 29 moves and a minimum of 19.​`,
  },
];

export default techData;
