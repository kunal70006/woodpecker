export const AboutUs = () => {
  return (
    <div
      id="about"
      className="py-8 md:py-16 min-h-screen flex flex-col gap-y-16 md:gap-y-32 items-center bg-[url('/about_us.jpg')] bg-top-right bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="flex mt-16 md:mt-32 flex-col items-center gap-4 text-center relative z-10 px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl font-lobster text-dark-brown">
          About Us
        </h2>
        <p className="text-light-brown w-full md:w-2/3 lg:w-1/3">
          What began as the dream of a 19-year-old girl with a deep love for
          good food was suddenly paused by the 2020 lockdown. But dreams have a
          way of waiting patiently and four years later, she brought her best
          friend on board to turn that dream into something real. Together, we
          built everything from scratch every nail, every recipe, every little
          detail with our own hands, hearts, and more than a few tears.
          Woodpecker Café isn’t just a place to eat. It’s a space filled with
          soul, flavour, laughter, and the warmth of a community brought
          together by food.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center relative z-10 px-4 md:px-0">
        <div className="w-full md:w-[40%] 2xl:w-1/3 bg-beige shadow-lg p-2 h-[250px] md:h-[350px]">
          image collage placeholder
        </div>
      </div>
    </div>
  );
};
