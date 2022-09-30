const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((e) => e.id === id).responsibleFor[0];
  const specie = species.find((e) => e.id === employee).residents;
  return Object.values(specie.sort((age1, age2) => age1.age - age2.age)[specie.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
