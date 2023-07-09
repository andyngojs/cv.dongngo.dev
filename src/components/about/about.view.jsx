import React, {memo, useCallback} from 'react';
import {
  FaAddressCard,
  FaMap,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa';
import appConfig from '../../app/config';

const socialsIcon = [
  {
    url: 'https://www.linkedin.com/in/dongnba',
    icon: <FaLinkedin />,
  },
  {
    url: 'https://github.com/andyngojs',
    icon: <FaGithub />,
  },
  {
    url: 'https://www.facebook.com/nBaDong',
    icon: <FaFacebook />,
  },
];

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

        <div className="subheading mt-2 mb-2">
          <FaAddressCard /> · {appConfig.personalInfo.title}
        </div>

        <div className="subheading mb-4">
          <FaMap /> · {appConfig.personalInfo.address} ·
          <a href={'mailto:' + appConfig.personalInfo.email}>
            {' ' + appConfig.personalInfo.email}
          </a>
        </div>

        <p className="lead mb-0">Welcome to visit my CV online!</p>
        <p className="lead mb-4">
          <em className="subheading-welcome">{appConfig.subHeading}</em>
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