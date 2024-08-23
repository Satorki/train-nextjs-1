import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="navList">
            <Link href="/about" className="navLink">
              About
            </Link>
          </li>
          <li>
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
          color: #fff;
        }

        .navList {
          list-style: none;
          display: flex;
          gap: 1rem;
        }

        .navLink {
          color: #fff;
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
