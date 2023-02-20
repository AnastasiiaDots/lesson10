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

chapters[3].after(chapters[6]);
chapters[6].after(chapters[8]);
chapters[9].after(chapters[2]);

chapters[47].after(chapters[55]);
chapters[50].after(chapters[48]);
chapters[53].after(chapters[51]);



console.log(books);
console.log(chapters);

