import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Anthony Stubbs - Box Truck Entrepreneur</h1>
        <p>
          Entering the box truck industry can be an exciting adventure, but it&apos;s important to be prepared. Even if your credit isn&apos;t perfect, my book, &quot;Before You Hop in the Box,&quot; can help! This comprehensive guide provides you with the latest information you need to hit the ground running in the box truck business. Don&apos;t let a less-than-ideal credit score hold you back - get your copy of &quot;Before You Hop in the Box&quot; today!
        </p>
        <a href="https://www.amazon.com/Before-You-Hop-Box-maximize/dp/B0C9SG1XDC?dplnkId=3a702891-f0e4-4896-85bd-2c7eb80f7188&nodl=1" className="cta-button">
          Get the Book
        </a>
      </div>

      <div className="features-section">
        <div className="feature">
          <Link href="/about" legacyBehavior>
            <a>
              <Image src="/images/picture7.jpg" alt="About Me" layout="fill" objectFit="cover" />
              <div className="overlay">
                <div className="feature-content">
                  <h2>About Me</h2>
                  <p>Anthony Stubbs is a passionate entrepreneur in the box truck industry...</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="feature">
          <Link href="/book" legacyBehavior>
            <a>
              <Image src="/images/book.png" alt="Book" layout="fill" objectFit="cover" />
              <div className="overlay">
                <div className="feature-content">
                  <h2>Book</h2>
                  <p>Discover the secrets to success in the box truck business with my comprehensive guide...</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="feature">
          <Link href="/credit-repair" legacyBehavior>
            <a>
              <Image src="/images/credit-repair.jpg" alt="Credit Repair" layout="fill" objectFit="cover" />
              <div className="overlay">
                <div className="feature-content">
                  <h2>Credit Repair</h2>
                  <p>Learn how to repair your credit and achieve financial freedom...</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="feature">
          <Link href="/pictures" legacyBehavior>
            <a>
              <Image src="/images/pictures.jpg" alt="Pictures" layout="fill" objectFit="cover" />
              <div className="overlay">
                <div className="feature-content">
                  <h2>Pictures</h2>
                  <p>Check out some moments from my journey in the box truck industry...</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;



