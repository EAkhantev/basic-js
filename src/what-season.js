const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  // if (toString.call(date) != '[object Date]') return false;
  const hasFakeProps = Boolean(Object.keys(date).length);
  const isDataObj = date.getTime;
  if (!isDataObj || hasFakeProps) {
    throw new Error('Invalid date!');
  };
  const season = [
    'winter', 'winter', 'spring',
    'spring', 'spring', 'summer',
    'summer', 'summer', 'autumn',
    'autumn', 'autumn', 'winter',
  ];

const month = date.getMonth();
return season[month];
}

module.exports = {
  getSeason
};
