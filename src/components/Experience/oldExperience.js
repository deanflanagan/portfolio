import "./Experience.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
// import linkedin from "./linkedin.png";
// import stackoverflow from "./stackoverflow.png";
// import github from "./github.png";
import data from "./ExperienceData";
import SkillBar from "react-skillbars";

// const techSkills = [
//   {
//     type: "Python",
//     level: 100,
//   },
//   {
//     type: "Javascript & Node.js",
//     level: 70,
//   },
//   {
//     type: "SQL",
//     level: 80,
//   },
//   {
//     type: "Linux OS",
//     level: 80,
//   },
//   {
//     type: "React",
//     level: 60,
//   },
//   {
//     type: "HTML/CSS",
//     level: 50,
//   },
// ];

// const concepts = [
//   {
//     type: "Backend",
//     level: 80,
//   },
//   {
//     type: "Frontend",
//     level: 50,
//   },
//   {
//     type: "Data/Algo",
//     level: 90,
//   },
//   {
//     type: "API/REST",
//     level: 75,
//   },
// ];

// const careerSkills = [
//   {
//     type: "B2B Sales",
//     level: 90,
//   },
//   {
//     type: "Education",
//     level: 90,
//   },
//   {
//     type: "Mgmt.",
//     level: 70,
//   },
//   {
//     type: "Prod. Dev.",
//     level: 60,
//   },
//   {
//     type: "Adaptability",
//     level: 90,
//   },
// ];
// const colors = {
//   bar: "#3498db",
//   title: {
//     text: "#fff",
//     background: "#2980b9",
//   },
// };

export default function Experience() {
  const getBrag = (link) => {
    <HashLink to={link}></HashLink>;
  };
  return (
    <React.Fragment>
      <div class="wrapper">
        <section className="section-intro">
          <h2>Skills and Project</h2>
          <p>
            Below you can find examples of my skills across a range of
            Technologies. Click on each bar to see an example of a problem i've
            solved in each technology. I can tie it all together too. See my
            live website here.
          </p>
          {/* <HashLink to="#python">Link to Hash Fragment</HashLink> */}
        </section>
        <div className="skillWrapper">
          {data.map((skill) => (
            <div className="skill-container">
              <h4>{skill.tag}</h4>
              <SkillBar
                skills={skill.data}
                colors={skill.colors}
                animationDuration={1500}
                animationDelay={500}
                // onClick={getBrag(skill.tag)}
              />
            </div>
          ))}
        </div>
        {data.map((skill) => (
          <div id={skill.tag} className="brag-container">
            <div>{skill.text}</div>
            <img src={skill.image} />
            <div>{skill.image}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
