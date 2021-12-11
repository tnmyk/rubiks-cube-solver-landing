const HowToUse = () => {
  return (
    <>
      <div className="">
        <h1 className="text-3xl font-medium mt-24 text-gray-300 mb-5">
          How to use?
        </h1>
      </div>
      <div
      className="md:w-1/2 w-11/12 pb-72"
        style={{
          height: "0",
          position: "relative",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/5DCo_bZ0PEo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default HowToUse;
