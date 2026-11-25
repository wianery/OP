'use strict';

const store = (saved) => () => saved;

module.exports = { store };

// Приклад виклику
const read = store(5);
console.log(read()); 