const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const ObjIsArray = Array.isArray(members);
  if (!ObjIsArray) return false;

  const teamName = members.reduce((acc, item) => {
    if (typeof item != 'string') return acc;
    const firstChar = item.trim().toUpperCase().charAt(0);
    acc.push(firstChar);
    return acc;
  }, []);


  return teamName.sort().join('');
}

module.exports = {
  createDreamTeam
};
