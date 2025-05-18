interface CardProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

const cards = [
  {
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/pizza.png",
    price: 100,
  },
  {
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/pizza.png",
    price: 100,
  },
  {
    title: "Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/pizza.png",
    price: 100,
  },
];
const Card = ({ title, description, image, price }: CardProps) => {
  return (
    <div className="rounded-sm bg-beige items-center text-center flex flex-col relative shadow-xl">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <img src={image} alt="" width={250} height={250} />
      </div>
      <div className="flex flex-col gap-4 mt-32 w-2/3 mb-16">
        <h3 className="text-2xl font-lobster text-dark-brown">{title}</h3>
        <p className="text-light-brown">{description}</p>
      </div>
      <div className="bg-light-brown w-fit py-2 px-4 absolute -bottom-4 left-1/2 -translate-x-1/2">
        <p className="text-white font-lobster text-2xl">₹{price}</p>
      </div>
    </div>
  );
};

export const OurSpeciality = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-32 items-center bg-[url('/background.png')] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="flex mt-32 flex-col items-center gap-4 text-center relative z-10">
        <h2 className="text-6xl font-lobster text-dark-brown">
          Our Speciality
        </h2>
        <p className="text-light-brown w-1/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque
          quos aliquid, quibusdam exercitationem totam suscipit reiciendis
          accusamus similique doloribus eius quam numquam recusandae earum atque
          alias sed quas culpa asperiores doloremque rerum saepe consequuntur
          perferendis. Atque dolore voluptatum quibusdam vero, sapiente numquam
          hic sint itaque dolorum ipsam aliquam commodi!
        </p>
      </div>
      <div className="flex gap-x-8 px-16 pb-16 relative z-10">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};
