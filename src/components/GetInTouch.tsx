import { useState } from "react";
import { Button } from "./ui/Button";
import { Input, TextArea } from "./ui/Input";
import {
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export const GetInTouch = () => {
  const [fields, setFields] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({ ...fields, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    const message = `Hi, my name is ${fields.name}. ${fields.message}`;
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/919773802473?text=${encodedMessage}`, "_blank");
    setFields({ name: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-y-8 md:gap-y-16 px-4 md:px-16 mb-16 md:mb-32">
      <div className="flex mt-16 md:mt-32 flex-col items-center gap-4 text-center">
        <h2 className="text-4xl md:text-6xl font-lobster text-dark-brown">
          Get in touch
        </h2>
        <p className="text-light-brown w-full md:w-1/2">
          We&apos;d love to hear from you! Whether you have a question about our
          dishes, want to reserve a table, or are interested in our catering
          services, we&apos;re here to help.
        </p>
        <p className="text-light-brown w-full md:w-1/2">
          We also regularly host events, workshops and open mic nights. If
          you&apos;re interested in joining us for an event, please let us know.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
        <div className="bg-beige shadow-xl rounded-sm p-4 gap-y-8 w-full">
          <p className="font-semibold text-dark-brown text-xl md:text-2xl">
            Send us a message
          </p>
          <div className="flex flex-col my-4 md:my-8">
            <label htmlFor="name" className="text-light-brown">
              Name
            </label>
            <Input
              id="name"
              type="text"
              className="rounded-sm p-2 mb-2"
              value={fields.name}
              onChange={handleChange}
            />
            <label htmlFor="message" className="text-light-brown">
              Message
            </label>
            <TextArea
              id="message"
              className="rounded-sm p-2"
              value={fields.message}
              onChange={handleChange}
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="rounded-none w-full md:w-auto"
            disabled={!fields.name || !fields.message}
          >
            Send a message
          </Button>
        </div>

        <div className="flex flex-col gap-4 bg-beige shadow-xl rounded-sm p-4 w-full">
          <p className="font-semibold text-dark-brown text-xl md:text-2xl">
            Contact Information
          </p>
          <div className="flex gap-2">
            <ClockIcon className="text-dark-brown size-5 md:size-6" />
            <div className="flex flex-col">
              <p className="text-dark-brown font-medium">Business Hours</p>
              <p className="text-light-brown text-xs">
                Sunday - Monday: 11:30AM - 9:00PM
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <PhoneIcon className="text-dark-brown size-5 md:size-6" />
            <div className="flex flex-col">
              <p className="text-dark-brown font-medium">Phone Number</p>
              <p className="text-light-brown text-xs">+91 9773802473</p>
            </div>
          </div>
          <div className="flex gap-2">
            <EnvelopeIcon className="text-dark-brown size-5 md:size-6" />
            <div className="flex flex-col">
              <p className="text-dark-brown font-medium">Email</p>
              <p className="text-light-brown text-xs">
                woodpeckerm13@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapPinIcon className="text-dark-brown size-5 md:size-6" />
            <div className="flex flex-col">
              <p className="text-dark-brown font-medium">Address</p>
              <p className="text-light-brown text-xs">
                M-13, Kalkaji, New Delhi, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0553862985216!2d77.2603145!3d28.5380549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37bfb39dd87%3A0x9cf93af6d9da03c9!2swoodpecker%20cafe!5e0!3m2!1sen!2sin!4v1747598392167!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
