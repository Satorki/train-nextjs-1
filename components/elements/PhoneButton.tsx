import React from "react";
import PhoneSvg from "../svgs/PhoneSvg";

const PhoneButton = () => {
  return (
    <div className="phoneButton">
      <span>
        <PhoneSvg />
      </span>
      <p>000 000 000</p>
      <style jsx>
        {`
          .phoneButton {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--first-color);
            font-family: "SpaceGrotesk";
            font-size: 1.1rem;
          }
        `}
      </style>
    </div>
  );
};

export default PhoneButton;
