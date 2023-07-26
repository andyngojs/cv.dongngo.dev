import React from 'react';
import {getRelativeTime} from '../../../utils';

const _ExperienceItem = ({
                           company, website, position, description = () => {
  }, startDate, endDate, address,
                         }) => {

  return (<div className='resume-item d-flex flex-column flex-md-row mb-4'>
    <div className='resume-content mr-auto'>
      <h3 className='mb-0'>
        {position}
      </h3>
      <div className='subheading mb-3 mb-sm-2'>
        <a href={website} target='blank'>
          {company}
        </a> - {address}
      </div>
      {/* Responsive */}
      <div className='resume-date d-lg-none d-sm-block text-md-right mb-2'>
        <span
          className='text-primary'>{startDate + ' - ' + endDate + ' (' + getRelativeTime(startDate, endDate) + ')'}</span>
      </div>
      <div className=''>{description()}</div>
    </div>

    <div className='resume-date d-none d-lg-block text-md-right'>
      <span
        className='text-primary'>{startDate + ' - ' + endDate + ' (' + getRelativeTime(startDate, endDate) + ')'}</span>
    </div>
  </div>);
};

export const ExperienceItem = React.memo(_ExperienceItem);
