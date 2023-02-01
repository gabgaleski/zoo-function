const data = require('../data/zoo_data');

const isManager = (id) => {
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const gerent = [stephanieId, olaId, burlId];
  return gerent.some((element) => id === element);
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const names = [];
  data.employees.forEach((employer) => {
    if (employer.managers.includes(managerId)) {
      names.push(`${employer.firstName} ${employer.lastName}`);
    }
  });
  return names;
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
