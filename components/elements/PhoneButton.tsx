import { SlPhone } from "react-icons/sl";
const PhoneButton = () => {
  return (
    <div className="phoneButton">
      <SlPhone className="phoneIcon" />
      <p>000 000 000</p>
      <style jsx>
        {`
          .phoneIcon {
            color: var(--first-color);
            font-size: 2rem;
            margin-bottom: 5px;
          }
          .phoneButton {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.8rem;
            color: var(--first-color);
            font-family: "SpaceGrotesk";
            font-size: 1.1rem;
            border: 1px solid var(--first-color);
            border-radius: 25px;
            padding: 2px 10px;
          }
        `}
      </style>
    </div>
  );
};

export default PhoneButton;
