'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};

module.exports = { removeElements };

// Приклади виклику
const towns = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(towns, 'Lima', 'Berlin', 'Kiev');
console.log(towns); 
