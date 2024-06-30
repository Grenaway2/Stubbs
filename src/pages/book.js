// src/pages/book.js
import Link from 'next/link';
import Image from 'next/image';

const Book = () => {
  return (
    <div className="book-container">
      <h1 className="book-title">Before You Hop in the Box</h1>
      <div className="ad-container">
        <h2>Over 10,000 copies sold!</h2>
        <video className="book-video" controls autoPlay muted loop>
          <source src="/videos/book-ad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="book-image-container">
        <Image src="/images/book.png" alt="Before You Hop in the Box" width={400} height={500} className="book-image" />
      </div>
      <p className="book-description">
        Before you hop in the box, is a step by step book of how to start your box trucking journey. This includes personal experiences from the author in the form of overcoming obstacles to stay afloat and grow his business to owning four trucks. It describes the mishaps he took and informs you on what to avoid when beginning, from buying a good truck to following the rules of the road when traveling to your destination and staying loaded. Freight will forever have to be transported, the box truck is a revenue stream that will never diminish.
      </p>
      <Link href="https://www.amazon.com/Before-You-Hop-Box-maximize/dp/B0C9SG1XDC?dplnkId=3a702891-f0e4-4896-85bd-2c7eb80f7188&nodl=1" legacyBehavior>
        <a className="buy-now-button" target="_blank">Buy Now</a>
      </Link>
    </div>
  );
};

export default Book;

