for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; ) {
  i++;
  console.log(i);
}

const userInput = ['Amirhosein', 'Arshiya'];

for (const userName of userInput) {
  console.log(userName);
}

const loggedUser = {
  name: 'Amirhosein',
  Age: 18,
  isLoggedIn: true,
};

// for (const nameUser in loggedUser) {
//   // console.log(nameUser);
//   // console.log(loggedUser[nameUser]);
//   console.log(`${nameUser} => ${loggedUser[nameUser]}`);
// }

let i = 1;

for (const userInputt of userInput) {
  console.log(`#${i}`);
  for (const nameUser in loggedUser) {
    console.log(`${nameUser} => ${loggedUser[nameUser]}`);
  }
  i++;
  break;
}

let randomNumbers = [];
let finished = false;

while (!finished) {
  const rndNumber = Math.random();
  randomNumbers.push(rndNumber);
  if (rndNumber > 0.5) {
    finished = true;
    console.log(randomNumbers);
  }
}

// let j = 0;

// while (j < 3) {
//   console.log('------------');
//   j++;
// }

for (i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

let k = 0;

outerWhile: do {
  console.log('Outer', k);
  for (let H = 0; H < 5; H++) {
    if (H === 3) {
      break outerWhile;
    }
    console.log('Inner', k);
  }
  k++;
} while (k < 4);

// let isFinished = false;

// while (!isFinished) {
//   isFinished = confirm('Do you want to quit?');
// }

// console.log('done');
