import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mx-auto w-10/12 border-t border-gray-600 mt-16 flex justify-between p-7 text-gray-400 font-medium text-lg">
      <div>Group 16</div>
      <div className="flex gap-x-7">
        <Link href="/">
          <a className="flex items-center gap-x-1">
            Github <BsGithub />
          </a>
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Members</Link>
        <Link href="/">About</Link>
      </div>
    </footer>
  );
};

export default Footer;
