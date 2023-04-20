const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(1, 8);
console.log(moreNumbers);

const moreNumbersInput = new Array(6);
console.log(moreNumbersInput);

const moreNumbersInput2 = Array(2, 3);
console.log(moreNumbersInput2);

const yetMoreNumbers = Array.of(3, 4);
console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

// const moreMoreNumbers = Array.from([1, 2, 3, 4, 5]);
const moreMoreNumbers = Array.from('Amir');
console.log(moreMoreNumbers);

const listItem = Array.from(listItems);
console.log(listItem);

const hobbies = ['sports', 'reading'];
console.log(hobbies);

const personalData = [18, 'Amir', { moreDetails: [] }];
console.log(personalData);

const analyticsData = [
  [1, 3],
  [7, 9],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
  // console.log(analyticsData);
}