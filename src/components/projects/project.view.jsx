import React, {memo, useCallback} from 'react';
import {myProjects} from '../../data/projects';

const _Project = () => {
  const renderProjects = useCallback(() => {
    return myProjects.map((item, index) => {
      return <React.Fragment key={index}>{item.projectElement}</React.Fragment>;
    });
  });

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="projects">
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>

        <ul className="fa-ul ul-project mb-0">{renderProjects()}</ul>
      </div>
    </section>
  );
};

export const Project = memo(_Project);
