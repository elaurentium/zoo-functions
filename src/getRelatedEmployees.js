const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  // seu código aqui
  if (id === stephanieId || id === olaId || id === burlId) {
    return employees.some((manager) => manager.id === id);
  }

  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const isManagerResult = isManager(managerId);

  if (isManagerResult !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees.filter((staff) => staff.managers
    .some((values) => values === managerId))
    .map((names) => `${names.firstName} ${names.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
