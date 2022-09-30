const data = require('../data/zoo_data');

const { species, employees } = data;

const arrayResult = employees.map((e) => {
  const arr = {
    id: e.id,
    fullName: `${e.firstName} ${e.lastName}`,
    species: e.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).name),
    location: e.responsibleFor.map((id) => species
      .find((specie) => specie.id === id).location),
  };
  return arr;
});

function getEmployeesCoverage(param) {
  // seu código aqui
  if (param === undefined) return arrayResult;

  const validEntry = arrayResult.find((element) => element.fullName.includes(Object.values(param))
  || element.id.includes(Object.values(param)));

  if (validEntry === undefined) {
    throw new Error('Informações Inválidas');
  }
  return validEntry;
}

module.exports = getEmployeesCoverage;
