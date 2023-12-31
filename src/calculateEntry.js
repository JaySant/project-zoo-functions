const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const visitors = {
    child: entrants.filter((visitor) => visitor.age < 18).length,
    adult: entrants.filter((visitor) => visitor.age >= 18 && visitor.age < 50).length,
    senior: entrants.filter((visitor) => visitor.age >= 50).length,
  };
  return visitors;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const total = child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
