interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

const cards = [
  {
    title: "Spicy Mango",
    description:
      "A refreshing burst of Mexican summer where raw mango tang meets a bold spicy twist, served to you chilled in a glass.",
    image:
      "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/best_sellers/ChatGPT%20Image%20May%2024,%202025,%2001_23_34%20PM.png",
    price: 140,
  },
  {
    title: "Rice Paper Dumplings",
    description:
      "Crispy, made-to-order delights bursting with flavour, served with two irresistible in house dips.",
    image:
      "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/best_sellers/IMG_2090.jpg",
    price: 180,
  },
  {
    title: "Mushroom Mania Burger",
    description:
      "A juicy, flavour packed fresh mushroom patty, stacked messy & saucy",
    image:
      "https://lmxacvqincqeswlthypp.supabase.co/storage/v1/object/public/assets/best_sellers/ChatGPT%20Image%20May%2024,%202025,%2001_16_32%20PM.png",
    price: 100,
  },
];
const Card = ({ title, description, image, price }: CardProps) => {
  return (
    <div className="rounded-sm bg-beige items-center text-center flex flex-col relative shadow-xl w-full md:w-auto">
      <div className="absolute -top-20 md:-top-24 left-1/2 -translate-x-1/2">
        <img
          src={image}
          alt={title}
          className="w-[200px] h-[200px] object-contain rounded-md"
        />
      </div>
      <div className="flex flex-col gap-4 mt-28 md:mt-32 w-4/5 md:w-2/3 mb-16">
        <h3 className="text-xl md:text-2xl font-lobster text-dark-brown">
          {title}
        </h3>
        <p className="text-light-brown text-sm md:text-base">{description}</p>
      </div>
      <div className="bg-light-brown w-fit py-2 px-4 absolute -bottom-4 left-1/2 -translate-x-1/2">
        <p className="text-white font-lobster text-xl md:text-2xl">₹{price}</p>
      </div>
    </div>
  );
};

export const OurSpeciality = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-16 md:gap-y-32 items-center bg-[url('/background.png')] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="flex mt-16 md:mt-32 flex-col items-center gap-4 text-center relative z-10 px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl font-lobster text-dark-brown">
          Our Speciality
        </h2>
        <p className="text-light-brown w-full md:w-1/3">
          Every dish at Woodpecker is made fresh with recipes handcrafted by us.
          No shortcuts, just honest flavours. From crispy rice paper dumplings
          to spicy Korean noodles, from our signature Mushroom Mania burger to
          the sweet kick of Strawberry Milk and Mexican Spicy Mango we serve
          comfort with a twist. It’s food you won’t forget, made just the way{" "}
          <b>we</b> love it.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-32 md:gap-y-0 md:gap-x-8 px-4 md:px-16 pb-16 relative z-10">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
