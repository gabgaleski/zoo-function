const data = require('../data/zoo_data');

const getDays = () => {
  const { hours } = data;
  const filterObj = Object.keys(data.hours).reduce((acc, element) => {
    acc[element] = {
      officeHour: `Open from ${hours[element].open}am until ${hours[element].close}pm`,
      exhibition: data.species.filter((specie) => specie.availability.includes(element))
        .map((animalName) => animalName.name),
    };
    return acc;
  }, {});
  if (filterObj.Monday) {
    filterObj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return filterObj;
};

const keysObj = Object.keys(data.hours);

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return getDays();
  }
  if (data.species.some((specie) => specie.name === scheduleTarget)) {
    const getAnimal = data.species.find((animal) => scheduleTarget === animal.name);
    return getAnimal.availability;
  }
  if (!data.species.some((element) => element.name === scheduleTarget)
  && !keysObj.includes(scheduleTarget)) {
    return getDays();
  }
  return { [scheduleTarget]: getDays()[scheduleTarget] };
};

module.exports = getSchedule;
