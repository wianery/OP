'use strict';

const array = () => {
  const items = [];

  const getItem = (index) => items[index];

  getItem.push = (value) => items.push(value); 
  getItem.pop = () => items.pop();             

  return getItem;
};

module.exports = { array };
