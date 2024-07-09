// src/pages/pictures.js
import Image from 'next/image';

const Pictures = () => {
  return (
    <div className="pictures-container">
      <h1 className="pictures-title">Pictures</h1>
      <div className="pictures-grid">
        <div className="picture-item">
          <Image src="/images/picture3.jpg" alt="Picture 3" width={300} height={200} />
        </div>
        <div className="picture-item">
          <Image src="/images/picture5.jpg" alt="Picture 5" width={300} height={200} />
        </div>
        <div className="picture-item">
          <Image src="/images/picture6.jpg" alt="Picture 6" width={300} height={200} />
        </div>
        <div className="picture-item">
          <Image src="/images/picture7.jpg" alt="Picture 7" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Pictures;


