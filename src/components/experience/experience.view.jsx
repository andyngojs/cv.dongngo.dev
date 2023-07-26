import React, {memo, useCallback} from 'react';
import {FaBookmark} from 'react-icons/fa';
import {ExperienceItem} from './experience-item/experience-item.view';

const myExperiences = [
  {
    company: 'Abaha global jsc',
    website: 'https://abaha.vn',
    position: 'Mobile App Developer',
    startDate: '03/2022',
    endDate: '06/2023',
    address: 'Hanoi, Vietnam',
    description: (
      <>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate to develop gifts, gift exchange module for{' '}
          <a target="_blank" href="https://share.abphotos.link/heWE">
            Plusssz
          </a>{' '}
          app (The feature of the received gifts list screen and search for received gifts)
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate to develop course module for{' '}
          <a target="_blank" href="https://share.abphotos.link/3eUo">
            Nghi Thảo
          </a>{' '}
          app (The feature of checkout online courses via VNPay,...)
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Write technical internal documents for the team.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Supporting customer.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate to maintain, upgrade mobile apps on the both platforms IOS and Android.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate to build, release mobile apps on the Google Play and App Store.
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
    address: 'Hanoi, Vietnam',
    description: (
      <>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Research Angular Framework
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate to develop Todolist app with Angular Framework{' '}
          (Project-based Learning)
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
        address={item.address}
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
