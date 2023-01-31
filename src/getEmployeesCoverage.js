const data = require('../data/zoo_data');

const ifNoParam = () => {
  return data.employees.map((employer) => {
    return {
      id: employer.id,
      fullName: `${employer.firstName} ${employer.lastName}`,
      species: employer.responsibleFor.map((specie) => {
        const filter = data.species.find((animal) => specie === animal.id);
        return filter.name;
      }),
      locations: employer.responsibleFor.map((specie) => {
        const filter = data.species.find((animal) => specie === animal.id);
        return filter.location;
      }),
    };
  });
};

const ifHaveParam = (obj) => {
  const getName = data.employees.find((employer) =>
    employer.firstName === obj.name || employer.lastName === obj.name
  || employer.id === obj.id);
  if (getName === undefined) {
    throw new Error('Informações inválidas');
  }
  return {
    id: getName.id,
    fullName: `${getName.firstName} ${getName.lastName}`,
    species: getName.responsibleFor.map((id) => {
      const filter = data.species.find((specie) => specie.id === id);
      return filter.name;
    }),
    locations: getName.responsibleFor.map((id) => {
      const filter = data.species.find((specie) => specie.id === id);
      return filter.location;
    }),
  };
};

const getEmployeesCoverage = (obj) => {
  if (obj === undefined) {
    return ifNoParam();
  }
  ifHaveParam(obj);
};

console.log(getEmployeesCoverage({ id: 'Id inválido' }));

module.exports = getEmployeesCoverage;
