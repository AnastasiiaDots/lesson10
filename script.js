'use strict'

const books = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const body = document.querySelector('body');
const bookName = document.querySelectorAll('h2 a');

const book2 = document.querySelector('.book:first-of-type ul');
const book2LiElements = book2.querySelectorAll('li');

const book5 = document.querySelector('.book:nth-of-type(6) ul');
const book5LiElements = book5.querySelectorAll('li');

const book6 = document.querySelector('.book:nth-of-type(3) ul');
const book6LiElements = book6.querySelectorAll('li');
const newChapter = document.createElement('li');

books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[2].before(books[5]);

adv.remove();

body.style.backgroundImage = 'url(./image/new_bg.jpg)';

bookName[4].textContent = 'Книга 3. this и Прототипы Объектов';

book2LiElements[3].after(book2LiElements[6]);
book2LiElements[6].after(book2LiElements[8]);
book2LiElements[9].after(book2LiElements[2]);

book5LiElements[1].after(book5LiElements[9]);
book5LiElements[4].after(book5LiElements[2]);
book5LiElements[7].after(book5LiElements[5]);

newChapter.textContent = 'Глава 8: За пределами ES6';
book6LiElements[8].append(newChapter);


console.log(books);
console.log(book2LiElements);
console.log(book5LiElements);
console.log(book6LiElements);

