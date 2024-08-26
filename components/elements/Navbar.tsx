import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navList">
          <li className="navLink">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="navLink">
            <Link href="/Services">SERVICES</Link>
          </li>
          <li className="navLink">
            <Link href="/Projects">PROJECTS</Link>
          </li>
          <li className="navLink">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1rem;
          color: var(--first-color);
          font-size: 1.7rem;
          font-family: "Jura";
        }

        .navList {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        .navLink {
          text-decoration: none;
        }

        .navLink:hover {
          text-decoration: underline;
          cursor: pointer;
          color: var(--background-color-end);
        }

        .active {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Navbar;
