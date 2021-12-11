import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mx-auto w-10/12 border-t border-gray-600 mt-16 flex flex-wrap-reverse justify-between p-7 text-gray-400 font-medium text-lg">
      <div>Group x</div>
      <div className="flex gap-x-7 flex-wrap ">
        <a href="#" className="flex items-center gap-x-1">
          Solver Github <BsGithub />
        </a>
        <a
          href="https://github.com/tnmyk/rubiks-cube-solver-landing"
          target="_blank"
          className="flex items-center gap-x-1"
          rel="noreferrer"
        >
          Webpage Github <BsGithub />
        </a>
        <Link href="/">About</Link>
        <Link href="/">Members</Link>
      </div>
    </footer>
  );
};

export default Footer;
