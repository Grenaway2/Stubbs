// src/pages/credit-repair.js
import Link from 'next/link';

const CreditRepair = () => {
  return (
    <div className="credit-repair-container">
      <h1 className="credit-repair-title">Credit Repair Services</h1>
      <div className="ad-container">
        <p>Learn more about our credit repair services</p>
        <Link href="https://a1creditrepair.net/" legacyBehavior>
          <a className="learn-more-button" target="_blank">Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default CreditRepair;

