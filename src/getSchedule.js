const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    const obj = data.hours;
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj);
    const objOpen = objValues.map((element) => element.open);
    const objClose = objValues.map((element) => element.close);
    // const filter = data.species.filter((animal) => animal.availability);
    return objKeys.map((element, index) => ({
      [objKeys[index]]: {
        officeHour: `Open from ${objOpen[index]}am until ${objClose[index]}pm`,
        exhibition: 'a',
      },
    }));
  }
  const getAnimal = data.species.find((animal) => scheduleTarget === animal.name);
  return getAnimal.availability;
};

console.log(getSchedule());

module.exports = getSchedule;
