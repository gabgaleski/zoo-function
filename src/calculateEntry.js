const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childrens = entrants.filter((elements) => elements.age <= 5).length;
  const adults = entrants.filter((elements) => elements.age >= 18 && elements.age < 50).length;
  const olds = entrants.filter((elements) => elements.age >= 50).length;
  return { child: childrens, adult: adults, senior: olds };
};
const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants === {} ) {
    return 0;
  }
  const priceKids = countEntrants(entrants).child * data.prices.child;
  const priceAdult = countEntrants(entrants).adult * data.prices.adult;
  const priceSenior = countEntrants(entrants).senior * data.prices.senior;
  return priceKids + priceAdult + priceSenior;
};

const entrants = [
  { name: 'Humberto', age: 5 },
  { name: 'Humberto', age: 5 },
  { name: 'Humberto', age: 5 },
  { name: 'Humberto', age: 18 },
  { name: 'Humberto', age: 18 },
  { name: 'Humberto', age: 50 },
];

console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
