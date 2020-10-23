'use strict';

const aside = document.getElementsByTagName('aside'),
    books = document.querySelectorAll('.books'),
    bookItem = document.querySelectorAll('.book'),
    body = document.querySelector('body'),
    adv = document.querySelector('.adv'),
    lists = document.querySelectorAll('ul'),
    subTitleLink = document.querySelectorAll('a');

// Восстановление порядка книг

const array = Object.keys(bookItem).sort(function(a, b) {

    if (bookItem[a].firstElementChild.innerText > bookItem[b].firstElementChild.innerText) { 
        return 1; }
    if (bookItem[a].firstElementChild.innerText < bookItem[b].firstElementChild.innerText) { 
        return -1; }
});
for (let i = 0; i< array.length; i++) {
    
    books[0].appendChild(bookItem[array[i]]);
}
console.log(array);

// Замена картинки заднего фона
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

// Исправить заголовок в книге 3
subTitleLink[4].innerText = "Книга 3. this и Прототипы Объектов";

// Удалить рекламу со страницы
adv.remove();

// Восстановить порядок глав во второй и пятой книге

const sortChapter = function(collection) {
    
    const sortElements = function(arr) {
        const arrInd = Object.keys(arr).sort(function(a, b) {
            if (arr[a].textContent > arr[b].textContent) {
                return 1; }
            if (arr[a].textContent < arr[b].textContent) { 
                return -1; }
            });
        let arrNew = [];
        for (let i = 0; i < arrInd.length; i++){
            arrNew.push(arr[arrInd[i]]);
        }
        return arrNew;
    };

    const elem = collection.querySelectorAll('li');
    let arrChapter = [],
        arrApp = [];

    elem.forEach(function(el) {
        if (el.textContent.indexOf('Введение') > -1) {
            collection.insertBefore(el, elem[0]);
        }
        if (el.textContent.indexOf('Предисловие') > -1) {
            collection.insertBefore(el, elem[1]);
        }
        if (el.textContent.indexOf('Глава') > -1) { arrChapter.push(el); }
        if (el.textContent.indexOf('Приложение') > -1) { arrApp.push(el); }
    });

    arrChapter = sortElements(arrChapter);
    
    arrChapter.forEach(function(el) {
        collection.appendChild(el);
    });
    arrApp = sortElements(arrApp);

    arrApp.forEach(function(el) {
        collection.appendChild(el);
    });
};

sortChapter(books[0].children[1].querySelector('ul'));
sortChapter(books[0].children[4].querySelector('ul'));

// Добавить главу “Глава 8” в шестую книгу

let child = document.createElement('li');
child.innerText = 'Глава 8: За пределами ES6';
books[0].children[5].querySelector('ul').appendChild(child);
sortChapter(books[0].children[5].querySelector('ul'));




