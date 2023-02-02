const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const nameList = [];
  data.species.forEach((specie) => {
    if (specie.name === animal) {
      nameList.push(specie.residents);
    }
  });
  return nameList[0].every((anim) => anim.age >= age);
};
// Ao importar o residents a variavel nameList vem com outro array dentro, assim necessario o index para dar o return no nameList.

module.exports = getAnimalsOlderThan;
