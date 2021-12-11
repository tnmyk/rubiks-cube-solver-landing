import { SiOpencv } from "react-icons/si";
import techData from "./techData";

const Tech = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-medium mt-24 text-gray-300">
          Technology used
        </h1>
      </div>
      <div className="flex gap-5 flex-wrap px-10 w-full justify-center mt-5">
        {techData.map(({ logo, title, desc }) => {
          return (
            <div
              style={{ minHeight: "15rem" }}
              className="flex flex-col gap-y-4 items-center p-8 border rounded border-gray-500 w-1/4"
            >
              <div className="font-medium text-5xl">{logo}</div>
              <h3 className="font-medium text-lg">{title}</h3>
              <div className="w-full text-center font-medium text-gray-400">
                {desc}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tech;
