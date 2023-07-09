import React, {memo, useCallback} from 'react';
import {FaBookmark} from 'react-icons/fa';
import {ExperienceItem} from './experience-item/experience-item.view';

const myExperiences = [
  {
    company: 'Abaha global jsc',
    website: 'https://abaha.vn',
    position: 'Mobile App Developer',
    startDate: '03/2022',
    endDate: 'Present',
    description: (
      <>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate developing Gift, gift exchange module for{' '}
          <a target="_blank" href="">
            Plusssz
          </a>{' '}
          app
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate developing Course module for{' '}
          <a target="_blank" href="">
            Nghi Thảo
          </a>{' '}
          app
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Build, upgrade app on the both platforms IOS and Android for customer.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate to release mobile apps on the Google Play and App Store.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Developed core features and the specific features with the request's
          customer.
        </div>
      </>
    ),
  },
  {
    company: 'NCCPlus Vietnam jsc (nccsoft)',
    website: 'https://ncc.asia/',
    position: 'FrontEnd Web Internship',
    startDate: '12/2021',
    endDate: '02/2022',
    description: (
      <>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Research Angular Framework
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate developing TodoList application with Angular Framework{' '}
          {'(Project-based Learning)'}
        </div>
      </>
    ),
  },
];

const _Experience = () => {
  const renderExperience = useCallback(() => {
    return myExperiences.map((item, index) => (
      <ExperienceItem
        key={index}
        company={item.company}
        website={item.website}
        position={item.position}
        startDate={item.startDate}
        endDate={item.endDate}
        description={() => item.description}
      />
    ));
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
