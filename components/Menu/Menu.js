import Link from "next/link";
import { useEffect } from "react";
import { BiDownload } from "react-icons/bi";
import styles from "./Menu.module.css";
const Menu = ({ isMenuOpen }) => {
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMenuOpen]);
  return (
    <div className={`${styles.menu} ${isMenuOpen && styles.open}`}>
      {/* <div className="gap-x-10 text-gray-400 font-medium text-lg hidden md:flex"> */}
      <Link href="/">About</Link>
      <Link href="/download">
        <a className="flex items-center gap-x-2">
          Download
          <BiDownload className="text-2xl" />
        </a>
      </Link>
    </div>
  );
};

export default Menu;
