const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const obj = {};
    species.forEach((elements) => {
      obj[elements.name] = elements.residents.length;
    });
    return obj;
  }

  if (animal.sex === undefined) {
    return species.find((specie) => specie.name === animal.specie).residents;
  }

  if (animal.specie && animal.sex !== undefined) {
    return species.find((specieSex) => specieSex.name === animal.specie).residents
      .filter((resident) => resident.sex === animal.sex).length;
  }
  return species.find((e) => e.name === animal).residents.length;
}

module.exports = countAnimals;
