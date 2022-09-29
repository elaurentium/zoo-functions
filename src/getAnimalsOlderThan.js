const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((a) => a.name === animal).residents.every((anim) => anim.age >= age);
}

module.exports = getAnimalsOlderThan;
