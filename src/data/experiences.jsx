import {FaBookmark} from 'react-icons/fa';

export const myExperiences = [
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
          Build, upgrade app on the App Store and Play Store for customer.
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
    company: 'NCCPlus Vietnam jsc',
    website: '#',
    position: 'FrontEnd Web Internship',
    startDate: '12/2021',
    endDate: '02/2022',
    description: (
      <>
        <div className="mb-2">
          <FaBookmark className="text-warning" />
          Participate work process and project-based learning.
        </div>
      </>
    ),
  },
];
