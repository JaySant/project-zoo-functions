const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const arrSpecies = data.species;
  const getSpecie = arrSpecies.filter((species) => ids.find((elemento) => species.id === elemento));
  return getSpecie;
}

module.exports = getSpeciesByIds;
