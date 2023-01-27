const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const obj = {};
    data.species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }
  const animals = data.species.find((objAnimal) => objAnimal.name === animal.species);
  const animalsSex = animals.residents.filter((element) => element.sex === animal.sex);
  if (animal.sex === undefined) {
    return animals.residents.length;
  }
  return animalsSex.length;
};
module.exports = countAnimals;
