const person = {
  name: 'Amirhosein',
  age: 18,
  hobbies: ['coding', 'reading', 'trading'],
  greet: function () {
    console.log('Hi there!');
  },
};

person.isAdmin = 'true';
delete person.age;

console.log(person);

// person.greet();