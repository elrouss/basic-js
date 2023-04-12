const { NotImplementedError } = require('../lib');

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
const createDreamTeam = (friends) => 
  Array.isArray(friends)
  ? friends
    .filter((friend) => typeof friend === 'string')
    .map((name) => name.replace(/\s/g, '')[0].toUpperCase())
    .sort()
    .join('')
  : false;

module.exports = {
  createDreamTeam
};
