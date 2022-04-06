const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employees = data.employees.find((item) => item.id === id).responsibleFor[0];
  const species = data.species.find((itemSpecies) => itemSpecies.id === employees).residents;
  const age = species.reduce((acc, valueInicial) =>
    (acc.age > valueInicial.age ? acc : valueInicial));
  return [
    age.name,
    age.sex,
    age.age,
  ];
}
module.exports = getOldestFromFirstSpecies;
// Aqui temos um operador condional ternario forma simplificada de fazer if onde verifica a idade mais velho
// Referencia https://www.youtube.com/watch?v=Mbwg0YIZwYo
