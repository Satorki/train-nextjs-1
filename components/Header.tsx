import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => (
  <>
    <div className="header-background">
      <div className="header-content">
        <Image
          src="/img/logo-long-no-bckg.png"
          alt="logo-long"
          width={400}
          height={80}
        />
        <Navbar />
      </div>
    </div>
    
    <style jsx>{`
      .header-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .header-background {
        width: 100%;
        background-color: var(--second-color);
      }
    `}</style>
  </>
);

export default Header;
