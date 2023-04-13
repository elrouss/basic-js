const { NotImplementedError } = require("../lib");

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
  if (!date) return "Unable to determine the time of year!";

  try {
    date.getTime();
  } catch (err) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  const seasons = {
    winter: [11, "Dec", 0, "Jan", 1, "Feb"],
    spring: [2, "Mar", 3, "Apr", 4, "May"],
    summer: [5, "June", 6, "July", 7, "Aug"],
    autumn: [8, "Sept", 9, "Oct", 10, "Nov"],
  };

  for (let season in seasons) {
    if (seasons[season].includes(month)) return season;
  }
}

module.exports = {
  getSeason,
};
