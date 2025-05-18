const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 50 50"
    {...props}
    className="fill-light-brown"
  >
    <path d="M16 3C8.855 3 3 8.855 3 16v18c0 7.145 5.855 13 13 13h18c7.145 0 13-5.855 13-13V16c0-7.145-5.855-13-13-13zm0 2h18c6.055 0 11 4.945 11 11v18c0 6.055-4.945 11-11 11H16C9.945 45 5 40.055 5 34V16C5 9.945 9.945 5 16 5m21 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-12 3c-6.045 0-11 4.955-11 11s4.955 11 11 11 11-4.955 11-11-4.955-11-11-11m0 2c4.955 0 9 4.045 9 9s-4.045 9-9 9-9-4.045-9-9 4.045-9 9-9" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="flex justify-center mx-16">
      <div className="flex items-center text-left flex-col w-1/3 gap-y-8">
        <p className="text-dark-brown font-semibold text-2xl">Hours</p>
        <p className="text-light-brown">Monday - Sunday: 11:30AM - 9:00PM</p>
      </div>
      <div className="flex items-center text-left flex-col w-1/3 gap-y-8">
        <p className="text-dark-brown font-semibold text-2xl">Contact</p>
        <div className="flex flex-col gap-y-2">
          <p className="text-light-brown">
            <span className="font-semibold">Address:</span>
            <a target="_blank" href="https://maps.app.goo.gl/zCaCv58RWYjeDKSF6">
              M-13, Kalkaji, New Delhi, India
            </a>
          </p>
          <p className="text-light-brown">
            <span className="font-semibold">Email:</span>
            <a target="_blank" href="mailto:woodpeckerm13@gmail.com">
              woodpeckerm13@gmail.com
            </a>
          </p>
          <p className="text-light-brown">
            <span className="font-semibold">Phone:</span>
            <a target="_blank" href="tel:+919773802473">
              +919773802473
            </a>
          </p>
        </div>
      </div>
      <div className="flex items-center text-left flex-col w-1/3 gap-y-8">
        <p className="text-dark-brown font-semibold text-2xl">Follow Us</p>
        <div className="flex gap-x-4">
          <a href="https://www.instagram.com/woodpeckerdiner/" target="_blank">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};
