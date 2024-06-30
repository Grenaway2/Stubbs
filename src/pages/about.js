// src/pages/about.js
const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>All About Anthony</h1>
        <p>
          My name is Anthony Stubbs, a former NFL player and HBCU student. Born and raised in New Jersey, now residing in Houston, TX. I have been in the trucking game since the end of the pandemic when I was left with almost nothing and had to figure it all out from square one.
        </p>
      </div>
      <div className="video-section">
        <video autoPlay muted loop className="about-video">
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-content">
        <p>
          Working labor jobs back to back, doing more work than my other coworkers but still getting paid the same, just wasn&apos;t it for me. I honestly just wanted to be a better father and be there for my family, but I didn&apos;t have the time nor the money to do so. I took a risk and instead of loading the trucks that would pull up to my old warehouse, I bought a truck of my own, and my life changed.
        </p>
        <p>
          Starting out was tough, but I had the freedom to work on my own schedule and cut costs where I saw fit to run my business. In the book, I will tell you a step-by-step way to get into the box truck game, also about the mistakes I made, and share some personal experiences that cost me a lot of time that you are able to learn from. I still make mistakes to this day, so it is a never-ending process of learning.
        </p>
      </div>
    </div>
  );
};

export default About;
