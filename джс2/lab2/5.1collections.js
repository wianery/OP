'use strict';

const phoneBook = [
  { name: 'margo', phone: '+380888888888' },
  { name: 'sasha', phone: '+380444444444' },
  { name: 'masha', phone: '+380111111111' },
];

const findPhoneByName = (name) => {
  for (const person of phoneBook) {
    if (person.name === name) {
      return person.phone;
    }
  }
};

console.log(findPhoneByName('sasha'));
console.log(findPhoneByName('margo'));