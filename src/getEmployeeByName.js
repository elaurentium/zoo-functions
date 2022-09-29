const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}

module.exports = getEmployeeByName;
