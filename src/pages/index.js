import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Anthony Stubbs</h1>
      <p className="intro-text">
        Entering the box truck industry can be an exciting adventure, but it&apos;s important to be prepared. Even if your credit isn&apos;t perfect, my book, &quot;Before You Hop in the Box,&quot; can help! This comprehensive guide provides you with the latest information you need to hit the ground running in the box truck business. Don&apos;t let a less-than-ideal credit score hold you back - get your copy of &quot;Before You Hop in the Box&quot; today!
      </p>
      <div className="sections-vertical">
        <div className="section">
          <Link href="/about" legacyBehavior>
            <a>
              <h2>About Me</h2>
              <Image src="/images/picture7.jpg" alt="About Me" width={300} height={200} className="section-image" />
            </a>
          </Link>
        </div>
        <div className="section">
          <Link href="/book" legacyBehavior>
            <a>
              <h2>Book</h2>
              <Image src="/images/book.png" alt="Book" width={300} height={400} className="section-image" />
            </a>
          </Link>
        </div>
        <div className="section">
          <Link href="/credit-repair" legacyBehavior>
            <a>
              <h2>Credit Repair</h2>
              <Image src="/images/credit-repair.jpg" alt="Credit Repair" width={300} height={200} className="section-image" />
            </a>
          </Link>
        </div>
        <div className="section">
          <Link href="/pictures" legacyBehavior>
            <a>
              <h2>Pictures</h2>
              <Image src="/images/pictures.jpg" alt="Pictures" width={300} height={200} className="section-image" />
            </a>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
