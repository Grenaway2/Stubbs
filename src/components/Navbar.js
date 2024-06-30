// src/components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          </a>
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/" legacyBehavior><a>Home</a></Link>
        <Link href="/about" legacyBehavior><a>About Me</a></Link>
        <Link href="/book" legacyBehavior><a>Book</a></Link>
        <Link href="/credit-repair" legacyBehavior><a>Credit Repair</a></Link>
        <Link href="/pictures" legacyBehavior><a>Pictures</a></Link>
      </div>
    </nav>
  );
};

export default Navbar;
