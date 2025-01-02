const HeroSection = () => {
  // Start of the hero section
  return (
    <>
      {/* Apply a typing animation to the title, similar to a keyboard */}
      <div className="HeroDivParent h-[500px] flex justify-center items-center flex-col ">
        <h1 className="Malika text-5xl text-center  font-bold text-gray-700 inline-block  overflow-hidden whitespace-wrap  slg_custom:whitespace-nowrap animate-typing ">
          <span className="animate-typing border-r-4 border-black pr-1">
            {/* Color the main site name in a different color */}
            <span className="text-teal-300 ">MALIKA</span>
            is the best site ever{" "}
          </span>
        </h1>
        <p className="text-2xl mt-5 font-medium text-center">
          Buy from our products immediately
        </p>
      </div>
      {/*End of the hero section*/}
    </>
  );
};

export default HeroSection;
