import React from "react";
import Image from "next/image";
import HeroImage from "../../public/img/hero-3-lq.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src={HeroImage}
        alt="hero image a car in garage"
        className="hero"
        layout="fill"
        objectFit="cover"
      />

      <style jsx>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Hero;
