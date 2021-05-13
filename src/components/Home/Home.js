import React from "react";
import "./Home.css";
// import Mugshot from "../../assets/images/sunset.jpg";
import Mugshot from "../../assets/images/me.JPG";

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
          <i>That's me on the right!</i>
        </div>
        <p className="fade-in-text">
          This site is a showcase for my talents. I invite you to explore my
          tech skills and experience in the Skills and Projects tab which
          includes links to my Github projects a live website I deployed. One of
          the few constant's in life is change and I embrace it. You can see
          where my sights are trained on next by visiting the Goals page.
        </p>

        {/* https://blog.mailtrap.io/react-send-email/#Sending_emails_with_EmailJS */}
      </section>
    </main>
  );
};

export default Welcome;
