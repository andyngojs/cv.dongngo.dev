import {memo, useCallback} from 'react';
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
          Participate in developing gifts and gift exchange modules for the{' '}
          <a target="_blank" href="https://share.abphotos.link/heWE">
            Plusssz
          </a>{' '}
          app. (The feature of the received gifts list screen and search for
          received gifts)
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate in developing course module for the{' '}
          <a target="_blank" href="https://share.abphotos.link/3eUo">
            Nghi Thảo
          </a>{' '}
          app. (The feature of checkout online courses via VNPay)
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Write technical internal documents for the team.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Customer support.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate in maintaining and upgrading mobile apps on both platforms
          IOS and Android.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate in building and releasing mobile apps on Google Play and
          App Store.
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
          Research Angular framework.
        </div>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate in developing the Todolist app with Angular framework.{' '}
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
