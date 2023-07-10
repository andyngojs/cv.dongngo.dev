import React, {memo, useCallback} from 'react';
import {FaCheck} from 'react-icons/fa';

const languagesAndTools = [
  {
    name: 'HTML',
    icon: <i className="devicon-html5-plain-wordmark colored"></i>,
  },
  {
    name: 'CSS',
    icon: <i className="devicon-css3-plain-wordmark colored"></i>,
  },
  {
    name: 'Javascript',
    icon: <i className="devicon-javascript-plain colored"></i>,
  },
  {
    name: 'React',
    icon: <i className="devicon-react-original colored"></i>,
  },
  {
    name: 'Typescript',
    icon: <i className="devicon-typescript-plain colored"></i>,
  },
  {
    name: 'Nodejs',
    icon: <i className="devicon-nodejs-plain colored"></i>,
  },
  {
    name: 'mongoDB',
    icon: <i className="devicon-mongodb-plain-wordmark colored"></i>,
  },
  {
    name: 'Github',
    icon: <i className="devicon-github-original colored"></i>,
  },
  {
    name: 'Gitlab',
    icon: <i className="devicon-gitlab-plain-wordmark colored"></i>,
  },
  {
    name: 'xcode',
    icon: <i className="devicon-xcode-plain colored"></i>,
  },
  {
    name: 'slack',
    icon: <i className="devicon-slack-plain-wordmark colored"></i>,
  },
];

const workflows = [
  'Git, Github for teamwork',
  "Tasks management with ClickUp",
  'Testing & Debugging',
  '...',
  'If you do not have an awesome brain, you have to ceaselessly learn!',
];

const _Skill = () => {
  const renderSkills = useCallback(() => {
    return languagesAndTools.map((item, index) => {
      return (
        <li key={item.name} className="list-inline-item" title={item.name}>
          {item.icon}
        </li>
      );
    });
  }, []);

  const renderWorkflow = useCallback(() => {
    return workflows.map((item, index) => {
      return (
        <li key={index}>
          {item !== '...' && <FaCheck className="fa-li" />}
          {item}
        </li>
      );
    });
  }, []);

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="skills">
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages, Tools</div>
        <ul className="list-inline dev-icons">{renderSkills()}</ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">{renderWorkflow()}</ul>
      </div>
    </section>
  );
};

export const Skill = memo(_Skill);
