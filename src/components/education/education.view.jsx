import React, {memo, useCallback} from 'react';
import {FaBookmark} from 'react-icons/fa';
import {myEducation} from '../../data/education';

const _Education = () => {
  const renderEducation = useCallback(() => {
    return myEducation.map((item, index) => {
      return (
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
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">{item.schoolYear}</span>
          </div>
        </div>
      );
    });
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
