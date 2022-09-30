const data = require('../data/zoo_data');

const { species } = data;

const specieLocal = species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(specie.name);
  } else {
    acc[specie.location] = [specie.name];
  }
  return acc;
}, {});

const specieName = (options) => species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(
      { [specie.name]: specie.residents.map((resident) => resident.name) },
    );
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const specieSort = (options) => species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(
      { [specie.name]: specie.residents.map((resident) => resident.name).sort() },
    );
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const sex = (options) => species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(
      {
        [specie.name]: specie.residents.filter(
          (resident) => resident.sex === options.sex,
        ).map((cada) => cada.name),
      },
    );
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const sexWithSort = (options) => species.reduce((acc, specie) => {
  if (Object.keys(acc).includes(specie.location)) {
    acc[specie.location].push(
      {
        [specie.name]: specie.residents.filter(
          (resident) => resident.sex === options.sex,
        ).map((cada) => cada.name).sort(),
      },
    );
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function include(options) {
  if ((options.sex && options.sorted)) return sexWithSort(options);
  if (options.sex) return sex(options);
  if (options.sorted) return specieSort();
  return specieName();
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return specieLocal;
  if (!options.includeNames && options.sex === 'female') return specieLocal;
  if (options.includeNames) return include(options);
}

console.log(sexWithSort({ sex: 'female' }).NE);

module.exports = getAnimalMap;
