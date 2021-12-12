import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
const Nav = ({ setMenuOpen, isMenuOpen }) => {
  return (
    <nav className="w-full p-6 px-6 flex justify-between ">
      <div className="font-bold text-xl z-10">Rubik's Cube Solver</div>
      <div className="gap-x-10 text-gray-400 font-medium text-lg hidden md:flex">
        <Link href="/">About</Link>
        <Link href="/">Members</Link>
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
