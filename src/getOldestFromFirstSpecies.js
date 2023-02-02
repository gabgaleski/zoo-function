const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const idPersona = data.employees.find((element) => element.id === id);
  const idAnimal = idPersona.responsibleFor[0];
  const animals = data.species.find((animal) => animal.id === idAnimal);
  const getInfo = animals.residents.reduce((acc, element) => {
    if (element.age > acc.age) {
      return element;
    }
    return acc;
  });
  return [getInfo.name, getInfo.sex, getInfo.age];
};

module.exports = getOldestFromFirstSpecies;
