const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((name) =>
    employeeName === name.firstName || name.lastName === employeeName);
};

module.exports = getEmployeeByName;
