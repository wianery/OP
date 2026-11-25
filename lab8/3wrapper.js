'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const value = args[i];
    const expectedType = types[i];
    const expectedName = expectedType.name.toLowerCase();
    if (typeof value !== expectedName) {
      throw new TypeError(`Argument type ${expectedName} expected`);
    }
  }

  const output = fn(...args);
  const resultType = types[types.length - 1];
  const resultName = resultType.name.toLowerCase();
  if (typeof output !== resultName) {
    throw new TypeError(`Result type ${resultName} expected`);
  }
  return output;
};

module.exports = { contract };

// Приклади виклику
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3)); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!')); 

// Приклад помилки
try {
  addNumbers(2, 'three');
} catch (error) {
  console.log(error.name + ': ' + error.message);
}