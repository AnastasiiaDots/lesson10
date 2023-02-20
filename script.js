'use strict'

const books = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const body = document.querySelector('body');
const bookName = document.querySelectorAll('h2 a');
const chapters = document.querySelectorAll('li')




books[0].before(books[1]);
books[0].after(books[4]);
books[4].after(books[3]);
books[2].before(books[5]);

adv.remove();

body.style.backgroundImage = 'url(./image/new_bg.jpg)';

bookName[4].textContent = 'Книга 3. this и Прототипы Объектов';

console.log(books);
console.log(chapters);

