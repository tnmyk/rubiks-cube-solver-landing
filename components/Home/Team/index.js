import teamData from "./teamData";

const Team = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-medium mt-24 text-gray-300">Team</h1>
      </div>
      <div className="flex gap-5 flex-wrap px-10 w-full justify-center mt-5">
        {teamData.map(({ name, rollNumber, contribution }) => {
          return (
            <div
              style={{ minHeight: "15rem" }}
              className="flex flex-col gap-y-5 items-center p-5 border rounded border-gray-500 w-1/4"
            >
              <div className="font-medium text-xl">{name}</div>
              <div className="w-full text-center font-medium text-gray-400">
                {contribution}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Team;
