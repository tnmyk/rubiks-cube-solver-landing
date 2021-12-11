import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full p-6 px-6 flex justify-between">
      <div className="font-bold text-xl">Rubik's Cube Solver</div>
      <div className="flex gap-x-10 text-gray-400 font-medium text-lg">
        <Link href="/">About</Link>
        <Link href="/">Members</Link>
      </div>
    </nav>
  );
};

export default Nav;
