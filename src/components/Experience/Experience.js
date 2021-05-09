import "./Experience.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
import data from "./ExperienceData";
import SkillBar from "react-skillbars";

export default function Experience() {
  return (
    <React.Fragment>
      <div class="wrapper">
        <section className="section-intro">
          <h2 className="title">Skills and Project</h2>
          <p>
            Below you can find examples of my skills across a range of
            Technologies. Click on any <strong><u>link</u></strong> to see examples of problems
            i've solved.
          </p>
          <p>
            I also welcome you to view my live website{" "}
            <HashLink className="hash-link" to="#basebets">
              <strong>Basebets</strong>
            </HashLink>
            .
          </p>
          {/* <HashLink to="#python">Link to Hash Fragment</HashLink> */}
        </section>
        <div className="skillWrapper">
          {data.map((skill) => (
            <div className="skill-container">
              <h4 >
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
        {data.map((skill) => (
          <div id={skill.tag.slice(1)} >
            <h3 className="title">{skill.title}</h3>

            {skill.skillBlurbs.map((blurb) => <React.Fragment ><h4 className="title">{blurb.type}</h4><div className="brag-container"><a href={blurb.url}><img src={blurb.img}/></a><div>{blurb.text}</div></div></React.Fragment>)}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
