import featuresData from "./featuresData";
const Features = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-medium mt-24 text-gray-300">Features</h1>
      </div>
      <div className="flex gap-4 flex-wrap px-10 w-full justify-center mt-5">
        {featuresData.map(({ title, desc }, index) => {
          return (
            <div
              key={index}
              style={{ minHeight: "15rem", minWidth: "17rem", width: "30%" }}
              className="flex flex-col gap-y-5 items-center p-5 border rounded border-gray-500"
            >
              <div className="font-medium text-xl">{title}</div>
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

export default Features;
