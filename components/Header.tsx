import Image from "next/image";
import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";

const Header = () => (
  <div className={styles.header}>
    <Image
      src="/img/logo-long-no-bckg.png"
      alt="logo-long"
      width={400}
      height={80}
    />
    <Navbar />
  </div>
);

export default Header;
