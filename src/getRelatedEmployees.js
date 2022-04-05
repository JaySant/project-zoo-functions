const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((manager) => manager.managers.includes(id));
  // referencia de estudo http://cangaceirojavascript.com.br/array-includes-vs-array-some/
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const employees = data.employees.filter((employee) => employee.managers.includes(managerId));
    const nameReturn = employees.map((element) => `${element.firstName} ${element.lastName}`);
    return nameReturn;
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
module.exports = { isManager, getRelatedEmployees };
