const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 1024 1024"
    className="icon fill-light-brown"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z" />
  </svg>
);

const ReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <div className="bg-beige shadow-lg px-4 pt-4 pb-12 h-auto min-h-[350px] w-full max-w-[350px] flex flex-col items-center">
      <div className="flex flex-col gap-y-4 items-center flex-grow">
        <p className="text-light-brown text-center text-sm md:text-base">
          {review}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 mt-auto">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
        <h3 className="text-xl md:text-2xl font-lobster text-dark-brown">
          {name}
        </h3>
      </div>
    </div>
  );
};

interface ReviewCardProps {
  name: string;
  review: string;
}

const reviews = [
  {
    name: "Jefferson Rubbo",
    review:
      "This place has been my preferred one until now in Kalkaji. It seems every single tea or meal is prepared with love. As a result everything that I tried at Woodpecker was delicious. The service is perfect, the team working there is kind and sincerely cares about customers.",
  },
  {
    name: "Tripti Tiwari",
    review:
      "The beautiful ambience, delicious food, reasonable prices and cooperative staff. The experience was truly delightful.❤️",
  },
  {
    name: "jai ghai",
    review:
      "This cafe have warm ambiance, inviting decor, and delightful aromas. The friendly staff and exceptional cappuccino create a perfect haven for a relaxing break and for date 🌹..",
  },
];

export const CustomerReviews = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-16 md:gap-y-32 items-center py-8 md:py-16 relative">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="flex mt-16 md:mt-32 flex-col items-center gap-4 text-center relative z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-lobster text-dark-brown">
          Our Customers Say
        </h2>
        <p className="text-light-brown w-full md:w-2/3 lg:w-1/3 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque
          quos aliquid, quibusdam exercitationem totam suscipit reiciendis
          accusamus similique doloribus eius quam numquam recusandae earum atque
          alias sed quas culpa asperiores doloremque rerum saepe consequuntur
          perferendis. Atque dolore voluptatum quibusdam vero, sapiente numquam
          hic sint itaque dolorum ipsam aliquam commodi!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 relative z-10 px-4">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </div>
  );
};
