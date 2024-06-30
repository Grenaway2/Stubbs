import { useState } from 'react';
import '../styles/globals.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/" legacyBehavior>
            <a>
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            </a>
          </Link>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/" legacyBehavior>
            <a onClick={() => setMenuOpen(false)}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a onClick={() => setMenuOpen(false)}>About Me</a>
          </Link>
          <Link href="/book" legacyBehavior>
            <a onClick={() => setMenuOpen(false)}>Book</a>
          </Link>
          <Link href="/credit-repair" legacyBehavior>
            <a onClick={() => setMenuOpen(false)}>Credit Repair</a>
          </Link>
          <Link href="/pictures" legacyBehavior>
            <a onClick={() => setMenuOpen(false)}>Pictures</a>
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      <div className="content-wrapper">
        <Component {...pageProps} />
      </div>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.tiktok.com/@a1stubbs" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} />
          </a>
          <a href="https://www.instagram.com/a1_stubbs" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
        <p>© 2024 Anthony Stubbs. All rights reserved.</p>
      </footer>
    </>
  );
}

export default MyApp;
