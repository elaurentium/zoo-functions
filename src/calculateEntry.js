const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((element) => element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  const ageList = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return ageList;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const [child, adult, senior] = Object.values(countEntrants(entrants));

  const values = adult * prices.adult + child * prices.child + senior * prices.senior;
  return values;
}

module.exports = { calculateEntry, countEntrants };
