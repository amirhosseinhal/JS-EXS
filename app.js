// document.body.children[0].lastChild.nodeValue = 'Hi Amir';

// document.body.children[1].children[0].href = 'https://www.google.com';

// console.dir(document);

let anchorElement = document.getElementById('external');

anchorElement.href = 'https://www.google.com';

// let headerElement = document.getElementById('header1');

// headerElement.textContent = 'Amirhosein';

let headElement = document.querySelector('h1');

headElement.textContent = 'AmirHosein';

let element = document.body.firstElementChild;

element = document.body.children[1];

console.dir(element);

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://www.google.com';
newAnchorElement.textContent = 'This ;eads t Goolge!';

let firstParagraph = document.querySelector('p');

console.dir(firstParagraph);

firstParagraph.append(newAnchorElement);

let removeHeader = document.querySelector('h1');

// removeHeader.remove();
// removeHeader.parentElement.removeChild(removeHeader);
