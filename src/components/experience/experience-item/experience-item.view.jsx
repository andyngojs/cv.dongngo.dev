import React, {memo} from 'react';

const _ExperienceItem = ({
  company,
  website,
  position,
  description = () => {},
  startDate,
  endDate,
}) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-4">
      <div className="resume-content mr-auto">
        <h3 className="mb-0">
          <a href={website} target="blank">
            {company}
          </a>
        </h3>
        <div className="subheading mb-3">{position}</div>
        <div className="">{description()}</div>
      </div>

      <div className="resume-date text-md-right">
        <span className="text-primary">{startDate + ' - ' + endDate}</span>
      </div>
    </div>
  );
};

export const ExperienceItem = memo(_ExperienceItem);