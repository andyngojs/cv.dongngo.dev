import React, {memo, useCallback} from 'react';
import {FaCheck} from 'react-icons/fa';
import {languagesAndTools, workflows} from '../../data/skills';

const _Skill = () => {
  const renderSkills = useCallback(() => {
    return languagesAndTools.map((item, index) => {
      return (
        <li key={item.name} className="list-inline-item">
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
