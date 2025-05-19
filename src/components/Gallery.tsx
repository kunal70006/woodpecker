export const Gallery = () => {
  return (
    <div className="min-h-screen my-16 flex flex-col gap-y-32 items-center bg-[url('/gallery_background.png')] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="flex mt-16 flex-col items-center gap-4 text-center relative z-10">
        <h2 className="text-6xl font-lobster text-dark-brown">Gallery</h2>
        <p className="text-light-brown w-1/3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque
          quos aliquid, quibusdam exercitationem totam suscipit reiciendis
          accusamus similique doloribus eius quam numquam recusandae earum atque
          alias sed quas culpa asperiores doloremque rerum saepe consequuntur
          perferendis. Atque dolore voluptatum quibusdam vero, sapiente numquam
          hic sint itaque dolorum ipsam aliquam commodi!
        </p>
      </div>
      <div className="relative z-10">image placeholder</div>
    </div>
  );
};
