import moment from 'moment';

export const getRelativeTime = (startDate, endDate) => {
  let startDateFormatted, endDateFormatted;
  if (!startDate || !endDate) {
    return null
  }

  if (!startDate.includes('/') && !endDate.includes('/')) {
    startDateFormatted = moment(startDate, 'YYYY').format('YYYY');
    endDateFormatted = moment(endDate, 'YYYY').format('YYYY');

    return moment(startDateFormatted).from(endDateFormatted, true);
  }

  startDateFormatted = moment(startDate, 'mm/YYYY').format('YYYYmm');
  endDateFormatted = moment(endDate, 'mm/YYYY').format('YYYYmm');

  return moment(startDateFormatted).from(endDateFormatted, true);
};
