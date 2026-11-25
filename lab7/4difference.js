'use strict';

const difference = (first, second) => {
  const onlyInFirst = [];
  for (const value of first) {
    if (!second.includes(value)) {
      onlyInFirst.push(value);
    }
  }
  return onlyInFirst;
};

module.exports = { difference };

// Приклади виклику
console.log(difference([7, -2, 10, 5, 0], [0, 10])); 
console.log(difference(['Beijing', 'Kiev'], ['Kiev', 'London', 'Baghdad'])); 