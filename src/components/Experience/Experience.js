import "./Experience.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
import data from "./ExperienceData";
import SkillBar from "react-skillbars";
import BasebetsPic from "./basebets.png";

export default function Experience() {
  return (
    <React.Fragment>
      <div class="wrapper">
        <section className="section-intro">
          <h2 className="title">Skills and Project</h2>
          <p>
            Below you can find examples of my skills across a range of
            Technologies. Click on any{" "}
            <strong>
              <u>link</u>
            </strong>{" "}
            to see examples of problems i've solved.
          </p>
          <p>
            I also welcome you to view my live website{" "}
            <HashLink className="hash-link" to="#basebets">
              <strong>Basebets</strong>
            </HashLink>
            .
          </p>
        </section>

        <div className="skillWrapper">
          {data.map((skill) => (
            <div className="skill-container">
              <h4>
                <HashLink className="hash-link" to={skill.tag}>
                  {skill.title}
                </HashLink>
              </h4>

              <SkillBar
                className="test"
                skills={skill.skills}
                colors={skill.colors}
                animationDuration={1500}
                animationDelay={500}
              />
            </div>
          ))}
        </div>

        <div className="basebetsWrapper">
          <h3 id="basebets">Basebets</h3>
          <div className="basebets-container">
            <div className="basebets-img">
              <a href="https://basebets.firebaseapp.com/">
                <img src={BasebetsPic} alt="basebets-preview" />
              </a>
            </div>
            <div>
              Basebets is a full stack website to follow MLB betting strategies.
              I made it using Django, Postgres, React and deployed via Heroku
              and Firebase. Click on the image to the right to be taken to a
              YouTube video series on how I made it and to the left to go the
              live site.
            </div>

            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/HR9GXzBSbJw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {data.map((skill) => (
          <div id={skill.tag.slice(1)}>
            <h3 className="title">{skill.title}</h3>

            {skill.skillBlurbs.map((blurb) => (
              <React.Fragment>
                <h4 className="title">{blurb.type}</h4>
                <div className="brag-container">
                  <a href={blurb.url}>
                    <img src={blurb.img} alt={blurb.url} />
                  </a>
                  <div>{blurb.text}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
