import React, {memo, useCallback} from 'react';
import {FaAddressCard} from 'react-icons/fa';
import {DiReact} from 'react-icons/di';
import appConfig from '../../app/config';
import {socialsIcon} from '../../data/socials';

const _About = () => {
  const renderSocial = useCallback(() => {
    return socialsIcon.map((social, index) => (
      <a target="blank" href={social.url} key={index}>
        {social.icon}
      </a>
    ));
  }, []);

  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          {appConfig.lastName + ' '}
          <span className="text-primary">{appConfig.firstName}</span>
        </h1>

        <div className="subheading mb-0">
          <FaAddressCard /> · {appConfig.personalInfo.title}
        </div>

        <div className="subheading mb-4">
          <a href={'mailto:' + appConfig.personalInfo.email}>
            {appConfig.personalInfo.email}
          </a>
        </div>

        <p className="lead mb-0">Welcome to visit my CV online!</p>
        <p className="lead mb-4">
          <em className="subheading-welcome">
            Have a basic knowledge of software development. The more specific is
            on the mobile platform and web development.
          </em>
        </p>

        <p className="lead mb-4">
          <strong>Front-End: </strong>
          {'I am experienced in' + ' '}
          <strong>
            Javascript on ReactJS, React Native, using Redux, Axios,...
          </strong>
          etc
        </p>

        <div className="social-icons">{renderSocial()}</div>
      </div>
    </section>
  );
};

export const About = memo(_About);
