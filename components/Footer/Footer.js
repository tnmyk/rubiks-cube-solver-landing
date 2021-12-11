import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto w-10/12 border-t border-gray-600 mt-16 flex justify-between p-7 text-gray-400 font-medium text-lg">
      <div>Group 16</div>
      <div className="flex gap-x-5 ">
        <Link href="/">Github</Link>
        <Link href="/">About</Link>
        <Link href="/">Members</Link>
        <Link href="/">About</Link>
      </div>
    </footer>
  );
};

export default Footer;
