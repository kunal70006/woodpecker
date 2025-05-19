export const AboutUs = () => {
  return (
    <div
      id="about"
      className="py-16 min-h-screen flex flex-col gap-y-32 items-center bg-[url('/about_us.jpg')] bg-top-right bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="flex mt-32 flex-col items-center gap-4 text-center relative z-10">
        <h2 className="text-6xl font-lobster text-dark-brown">About Us</h2>
        <p className="text-light-brown w-1/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque
          quos aliquid, quibusdam exercitationem totam suscipit reiciendis
          accusamus similique doloribus eius quam numquam recusandae earum atque
          alias sed quas culpa asperiores doloremque rerum saepe consequuntur
          perferendis. Atque dolore voluptatum quibusdam vero, sapiente numquam
          hic sint itaque dolorum ipsam aliquam commodi!
        </p>
      </div>
      <div className="flex gap-8 w-full justify-center relative z-10">
        <div className="w-[40%] 2xl:w-1/3 bg-beige shadow-lg p-2 h-[350px]">
          image collage placeholder
        </div>
        <div className="flex flex-col w-1/4 gap-y-16">
          <h2 className="text-4xl font-lobster text-dark-brown">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </h2>
          <p className="text-light-brown">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            consectetur quia eum nam nihil porro esse expedita fugiat iste,
            officiis voluptates, omnis blanditiis vitae perspiciatis alias
            commodi ipsa consequatur qui molestias exercitationem amet dolorem,
            voluptatibus rerum. Voluptate sapiente nulla quis facilis fugiat
            aliquam alias placeat, culpa ex, aspernatur provident praesentium.
          </p>
        </div>
      </div>
    </div>
  );
};
