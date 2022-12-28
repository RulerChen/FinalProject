import React from "react";
import { DiBootstrap, DiJavascript1, DiReact, DiNodejsSmall, DiAws, DiMongodb } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";

import pic1 from "../pics/pic1.jpg";
import pic2 from "../pics/pic2.jpg";

const About = () => {
  return (
    <div className="container py-4">
      <div className="row  align-self-center">
        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-body">
              <img src={pic1} className="img-fluid img-thumbnail d-block mx-auto" style={{ width: "20rem", height: "20rem" }} />
              <h4 className="card-title">陳彥廷</h4>
              <h5 className="card-subtitle mb-2 text-muted">Frontend Developer</h5>
              <h6 className="card-text">Skill:</h6>
              <ul>
                <li>
                  <DiBootstrap style={{ width: "1.5rem", height: "1.5rem" }} color="purple" />
                  &nbsp; Bootstrap
                </li>
                <li>
                  <DiJavascript1 style={{ width: "1.5rem", height: "1.5rem" }} color="yellow" />
                  &nbsp; JavaScript
                </li>
                <li>
                  <DiReact style={{ width: "1.5rem", height: "1.5rem" }} color="skyblue" />
                  &nbsp; React
                </li>
              </ul>
              <h6 className="card-text">
                Contact me: &nbsp;
                <a href="https://github.com/RulerChen" target="_blank">
                  <AiFillGithub style={{ width: "2rem", height: "2rem" }} color="black" />
                </a>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-light">
            <div className="card-body">
              <img src={pic2} className="img-fluid img-thumbnail d-block mx-auto" style={{ width: "20rem", height: "20rem" }} />
              <h4 className="card-title">余祐徵</h4>
              <h5 className="card-subtitle mb-2 text-muted">Backend Developer</h5>
              <h6 className="card-text">Skill:</h6>
              <ul>
                <li>
                  <DiNodejsSmall style={{ width: "1.5rem", height: "1.5rem" }} color="green" />
                  &nbsp; Node.js
                </li>
                <li>
                  <DiMongodb style={{ width: "1.5rem", height: "1.5rem" }} color="green" />
                  &nbsp; MongoDB
                </li>
                <li>
                  <DiAws style={{ width: "1.5rem", height: "1.5rem" }} color="orange" />
                  &nbsp; AWS
                </li>
              </ul>
              <h6 className="card-text">
                Contact me: &nbsp;
                <a href="https://github.com/enzoenzx" target="_blank">
                  <AiFillGithub style={{ width: "2rem", height: "2rem" }} color="black" />
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
