const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nameAnimal = data.species.find(({ name }) => name === animal);
  const getAnimalOlder = nameAnimal.residents.every((resident) => resident.age > age);
  return getAnimalOlder;
}
module.exports = getAnimalsOlderThan;
