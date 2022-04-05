const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui

  const arr = data.employees;
  const emp = arr.find((elem) => elem.firstName === employeeName || elem.lastName === employeeName);
  if (employeeName === undefined) return {};
  return emp;
}
module.exports = getEmployeeByName;
