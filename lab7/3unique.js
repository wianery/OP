'use strict';

const unique = (list) => {
  const uniqueList = [];
  for (const value of list) {
    if (!uniqueList.includes(value)) {
      uniqueList.push(value); 
    }
  }
  return uniqueList;
};

module.exports = { unique };

// Приклади виклику
console.log(unique([2, 1, 1, 3, 2])); 
console.log(unique(['top', 'bottom', 'top', 'left'])); 