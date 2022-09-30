const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const reapetAnimals = species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return reapetAnimals;
  }
  if (Object.keys(animal).length === 1) {
    const total = species.find((e) => e.name === animal.specie);
    return total.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const foundAnimal = species.find((e) => e.name === animal.specie);
    const maleorFemale = foundAnimal.residents.filter((each) => each.sex === animal.sex);
    return maleorFemale.length;
  }
}

module.exports = countAnimals;
