const data = require('../data/zoo_data');

const getSpeciesByIds = (id1, id2) => {
  const animals = [];
  data.species.forEach((animal) => {
    if (animal.id === id1 || animal.id === id2) {
      animals.push(animal);
    }
  });
  return animals;
};

module.exports = getSpeciesByIds;
