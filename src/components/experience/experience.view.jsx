import React, {memo, useCallback} from 'react';
import {ExperienceItem} from './experience-item/experience-item.view';
import {myExperiences} from '../../data/experiences';

const _Experience = () => {
  const renderExperience = useCallback(() => {
    return myExperiences.map((item, index) => {
      return (
        <ExperienceItem
          key={index}
          company={item.company}
          website={item.website}
          position={item.position}
          startDate={item.startDate}
          endDate={item.endDate}
          description={() => item.description}
        />
      );
    });
  }, []);

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="experience">
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>

        {renderExperience()}
      </div>
    </section>
  );
};

export const Experience = memo(_Experience);
