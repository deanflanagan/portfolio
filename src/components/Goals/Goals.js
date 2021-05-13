import React from "react";
import "./Goals.css";

export default function Goals() {
  return (
    <React.Fragment>
      <div className="goals-main">
        <h2 className="goals-title">Goals</h2>
        <div className="goals-container">
          <div className="goals-item">
            <h4 className="goals-title">Short Term Goals</h4>
            <ul>
              <li>Work at a company valuing my tech and career skills</li>
              <li>Learn more about TDD, different architectures to SPA</li>
              <li>Explore AI, ML and data science</li>
            </ul>
          </div>
          <div className="goals-item">
            <h4 className="goals-title">Long Term Goals</h4>
            <ul>
              <li>Determine the right route: full stack or specialize?</li>
              <li>
                Learn and incorporate new technologies in my job and in my own
                projects
              </li>
              <li>Run my own website or business</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
