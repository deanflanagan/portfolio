import React from "react";
import "./Home.css";
import Mugshot from "../../assets/images/sunset.jpg";

const Welcome = () => {
  return (
    <main>
      <section className="home-section">
        <h1 className="centre-text fade-in-text-fast">
          Dean Flanagans Home Page
        </h1>
        <p className="centre-text fade-in-text">
          Welcome and thank you for visiting. Dean Flanagan is a software
          developer based in Ontario.
        </p>
        <div className="single-image-container centre-text fade-in-text">
          <img src={Mugshot} alt="logo" className="single-image" />
          Working on the pensiveness...
        </div>
        <p className="fade-in-text">
          This site is a showcase for my talent and profile. I invite you to
          explore my unique <a href="/Experience">past experiences</a> and what
          brought me to programming. You can get a good idea of how what kind of
          software developemnt I have learend to date and my current skillset by
          visiting my current live projects. One of the few constant's in life
          is change and I embrace it. You can see where my sights are trained on
          next by visiting the aspirations page.
        </p>

        {/* https://blog.mailtrap.io/react-send-email/#Sending_emails_with_EmailJS */}
      </section>
    </main>
  );
};

export default Welcome;
