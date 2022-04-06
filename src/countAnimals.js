const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};

  if (animal === undefined) {
    data.species.forEach((item) => {
      obj[item.name] = item.residents.length;
    });
    return obj;
  }
  if (animal.specie && animal.sex) {
    const resident = data.species.find((item) => item.name === animal.specie);
    return resident.residents.filter((element) => element.sex === animal.sex).length;
  }
  if (Object.keys(animal).includes('specie')) {
    const resident = data.species.find((item) => item.name === animal.specie);
    return resident.residents.length;
  }
}
module.exports = countAnimals;
