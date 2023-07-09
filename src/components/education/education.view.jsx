import React, {memo, useCallback} from 'react';
import {FaBookmark} from 'react-icons/fa';

const myEducation = [
  {
    university: 'Hanoi Open University',
    website: 'https://hou.edu.vn',
    schoolYear: '2018-2022',
    subHeading:
      'I graduated with a college of electronic and telecommunication engineer, but i developed my career as a software developer.',
    description: 'Major: Electronic and Telecommunication Engineering.',
  },
];

const _Education = () => {
  const renderEducation = useCallback(() => {
    return myEducation.map((item, index) => (
      <div
        key={index}
        className="resume-item d-flex flex-column flex-md-row mb-5">
        <div className="resume-content mr-auto">
          <h3 className="mb-2">
            <a href={item.website} target="blank">
              {item.university}
            </a>
          </h3>
          <div className="subheading mb-3">{item.subHeading}</div>
          {item.description && (
            <div className="mb-2">
              <FaBookmark className="text-warning" />
              {' ' + item.description}
            </div>
          )}

          <div className="mb-2">
            <FaBookmark className="text-warning" /> Building{' '}
            <a
              target="_blank"
              href="https://github.com/andyngojs/led-cube-4x4x4">
              <strong>Led Cube Board</strong>
            </a>{' '}
            and{' '}
            <a target="_blank" href="https://youtu.be/6TXw0TIgGFA">
              <strong>Controller of temperature and humidity </strong>
            </a>
            - Two final-term specialization projects
          </div>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{item.schoolYear}</span>
        </div>
      </div>
    ));
  }, []);

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education">
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>
        {renderEducation()}
      </div>
    </section>
  );
};

export const Education = memo(_Education);
