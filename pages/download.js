import { AiFillWindows } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
const Download = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-5xl mt-28 mb-8 text-center">
        Download for Windows <AiFillWindows style={{ display: "inline" }} />
      </h1>
      <button className="p-3 w-56 font-medium text-md rounded bg-green-500 flex justify-center items-center gap-x-2">
        <FiDownload />
        Download
      </button>
      <span className="text-sm text-gray-400 mt-1">(70 Mb .exe)</span>
    </div>
  );
};

export default Download;
