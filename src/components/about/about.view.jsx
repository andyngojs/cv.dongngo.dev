import React, { memo } from "react";
import appConfig from "../../app/config";

const _About = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          {appConfig.lastName + " "}
          <span className="text-primary">{appConfig.firstName}</span>
        </h1>
        <div className="subheading mb-0">
          <i className="fa fa-address-card"></i> · {appConfig.personalInfo.title}
        </div>
        <div className="subheading mb-4">
          <a href={"mailto:" + appConfig.personalInfo.email}>
            {appConfig.personalInfo.email}
          </a>
        </div>
        <p className="lead mb-0">Welcome to visit my CV online!</p>
        <p className="lead mb-4">
          <em className="subheading-welcome">
            "A little bit of fragrance always clings to the hands that
            gives flowers!"
          </em>
        </p>
        <p className="lead mb-2">
          <strong>
            <i className="devicon-nodejs-plain"></i> Back-End:
          </strong>
          I am experienced in{" "}
          <strong>Javascript, TypeScript, DynamoDB, MongoDB...etc</strong> on
          <strong>Node.JS</strong> platform. Experience in using{" "}
          <strong>AWS Console of Amazon Web Services</strong> like an
          infrastructure service.
        </p>

        <p className="lead mb-4">
          <strong>
            <i className="devicon-react-original"></i> Front-End:
          </strong>
          I am experienced in{" "}
          <strong>
            Javascript on ReactJS Framework, using Redux, Axios, Bootstrap...
          </strong>
          etc
        </p>

        <div className="social-icons">
          <a target="blank" href="https://www.linkedin.com/in/trungquandev">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a target="blank" href="https://github.com/trungquandev">
            <i className="fab fa-github"></i>
          </a>
          <a target="blank" href="https://www.facebook.com/trungquandev">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/c/TrungquandevOfficial"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export const About = memo(_About);
