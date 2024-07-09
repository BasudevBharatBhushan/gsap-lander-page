import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Brief = () => {
  useGSAP(() => {
    gsap.from(".anim", {
      ease: "power1.inOut",
      y: 40,
      delay: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: ".anim",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section className="  text-gray-600 w-full ">
      <div className="p-8">
        <h1 className="anim font-extrabold text-4xl md:text-6xl mb-2">
          Olive Ridley
        </h1>
        <p className="anim font-semibold text-xl md:text-2xl text-gray-500 mb-2">
          Your Storyteller
        </p>
        <p className="anim font-extralight text-lg ">
          We are the creators of tomorrow, who believe in shaping and designing
          the experience of tomorrow. You can also call us a creative bunch who
          have had first-hand experience in understanding and harnessing the
          might of the digital landscape & using the online medium to help
          brands across the globe with our unique brand solutions and
          communications.
        </p>
        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:focus:ring-yellow-900">
          Lets Talk
        </button>
      </div>
    </section>
  );
};

export default Brief;
