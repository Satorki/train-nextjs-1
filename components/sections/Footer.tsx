import React from "react";
import { SlHeart } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="footer">
      Made with
      <span>
        <SlHeart fill="var(--background-color-end)" size={15} />
      </span>
      by Satorki
      <style jsx>{`
        .footer {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          align-items: center;
          padding: 10px;
          background-color: var(--second-color);
          color: var(--first-color);
          font-family: "SpaceGrotesk";
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
};

export default Footer;
