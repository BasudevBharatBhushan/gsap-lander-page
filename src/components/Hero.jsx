import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {} from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#company-subname", {
      ease: "power1.inOut",
      y: 40,
      delay: 1.5,

      opacity: 0,
    });
    gsap.from(".comp-name", {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      opacity: 0,
    });
    gsap.from("#company-moto", {
      ease: "power1.inOut",
      duration: 2,
      opacity: 0,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-gray-500 flex justify-center items-center">
      <div className=" text-white text-center">
        <p
          id="company-name"
          className="font-bold text-5xl md:text-8xl opacity-80"
        >
          <span className="comp-name">O</span>
          <span className="comp-name">l</span>
          <span className="comp-name">i</span>
          <span className="comp-name">v</span>
          <span className="comp-name">e</span>{" "}
          <span className="comp-name">r</span>
          <span className="comp-name">i</span>
          <span className="comp-name">d</span>
          <span className="comp-name">l</span>
          <span className="comp-name">e</span>
          <span className="comp-name">y</span>
        </p>
        <p
          id="company-subname"
          className=" font-semibold text-3xl md:text-6xl opacity-60 mt-3 "
        >
          media
        </p>
        <p id="company-moto" className="mt-3 text-xl opacity-70">
          Empowering the digital media with the latest technology
        </p>
      </div>
    </section>
  );
};

export default Hero;
