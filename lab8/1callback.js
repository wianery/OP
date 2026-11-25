'use strict';

const iterate = (source, handler) => {
  const names = Object.keys(source);
  for (const name of names) {
    const content = source[name];
    handler(name, content, source);
  }
};

module.exports = { iterate };

// Приклад виклику
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
});