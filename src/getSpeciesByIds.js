const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.find((element) => id === element));
}
module.exports = getSpeciesByIds;
