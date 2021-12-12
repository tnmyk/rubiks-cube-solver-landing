import Link from "next/link";
import { BiDownload, BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
const Nav = ({ setMenuOpen, isMenuOpen }) => {
  return (
    <nav className="w-full p-6 px-6 flex justify-between ">
      <Link href="/">
        <a className="font-bold text-xl z-10">Rubik's Cube Solver</a>
      </Link>
      <div className="gap-x-10 text-gray-400 font-medium text-lg hidden md:flex">
        <Link href="/">About</Link>
        <Link href="/download">
          <a className="flex items-center gap-x-2">
            Download
            <BiDownload className="text-2xl" />
          </a>
        </Link>
      </div>
      <div className="text-4xl md:hidden z-10" style={{ transition: "1s" }}>
        {isMenuOpen ? (
          <IoMdClose
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
          />
        ) : (
          <BiMenuAltRight
            onClick={() => {
              setMenuOpen((prev) => !prev);
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
