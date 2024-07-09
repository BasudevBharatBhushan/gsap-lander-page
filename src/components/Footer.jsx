import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section className=" bg-gray-400  text-gray-700 w-full mt-0">
      <div className="p-8 flex flex-col md:flex-row justify-around text-center gap-16 md:gap-0">
        <div className="">
          <h1 className=" font-extrabold text-3xl md:text-6xl mb-2">
            Olive Ridley
          </h1>
          <p className="font-semibold text-lg md:text-2xl text-gray-500 mb-2">
            Address
          </p>
          <p className=" font-extralight text-base md:text-lg ">
            123, 1st Floor, 4th Cross, 5th Main, 6th Sector, <br /> HSR Layout,
            Bangalore
          </p>
          <button className="text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:focus:ring-yellow-900">
            Lets Connect
          </button>
        </div>
        <div className="">
          <h1 className=" font-extrabold text-3xl mb-2 ">Reach out to us</h1>
          <div className="flex justify-evenly ">
            <FontAwesomeIcon size="2x" icon={faInstagram} />
            <FontAwesomeIcon size="2x" icon={faXTwitter} />
            <FontAwesomeIcon size="2x" icon={faFacebook} />
          </div>

          <p className="my-4">aloha@oliveridleymedia.in</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
