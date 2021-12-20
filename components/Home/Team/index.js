import teamData from "./teamData";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const ProfileLogo = ({ website }) => {
  switch (website) {
    case "linkedIn":
      return <BsLinkedin />;
    case "github":
      return <BsGithub />;
    default:
      return null;
  }
};
const ProfileLink = ({ website, link }) => {
  if (!link) return null;
  return (
    <a href={link} target="_blank" rel="noreferrer" className="text-gray-300">
      <ProfileLogo website={website} />
    </a>
  );
};
const Team = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-medium mt-24 text-gray-300">Group 160 team members</h1>
      </div>
      <div className="flex gap-5 flex-wrap px-10 w-full justify-center mt-5">
        {teamData.map(
          (
            { name, rollNumber, contribution, photoURL, linkedIn, github },
            index
          ) => {
            return (
              <div
                key={index}
                style={{ minHeight: "15rem", minWidth: "17rem" }}
                className="flex flex-col items-center p-7 border rounded border-gray-500 w-1/4"
              >
                <div className="rounded-full w-20 bg-gray-400 overflow-hidden mb-3">
                  <img
                    src={
                      photoURL ||
                      `https://avatars.dicebear.com/api/micah/${Math.random()}.svg`
                    }
                  />
                </div>
                <div className="font-medium text-xl">{name}</div>
                <div className="text-gray-400 font-medium mb-4">
                  {rollNumber}
                </div>
                <div className="flex flex-wrap justify-center gap-x-3">
                  <ProfileLink website={"linkedIn"} link={linkedIn} />
                  <ProfileLink website={"github"} link={github} />
                </div>
                <div className="w-full text-center font-medium text-gray-400 mt-3">
                  {contribution}
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Team;
