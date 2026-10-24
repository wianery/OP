'use strict';

const fn = () => {
  const person1 = { name: 'margo' };
  let person2 = { name: 'sasha' };

  person1.name = 'masha';
  person2.name = 'karina';

  person2 = { name: 'dasha' };

  console.log(person1);
  console.log(person2);
  // const забороняє змінювати посилання, але не забороняє змінювати сам вміст об'єкта.
};

fn()

