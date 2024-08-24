import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navList">
          <li className="navLink">
            <Link href="/about" className="navLink">
              About
            </Link>
          </li>
          <li className="navLink">
            <Link href="/contact" className="navLink">
              Contact
            </Link>
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
        }

        .navList {
          list-style: none;
          display: flex;
          gap: 1rem;
        }

        .navLink {
          text-decoration: none;
        }

        .navLink:hover {
          text-decoration: underline;
        }

        .active {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Navbar;
