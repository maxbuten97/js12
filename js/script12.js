'use strict';
 

/* ФУНКЦИИ
 let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

/ function calc(a, b) {
return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6)); 

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log (anotherNum);

const logger = function() {
console.log('Hello');
};
 logger();

 const calc = (a, b) => {
    console.log('1')
return a + b;
}; */

























/* ЦИКЛЫ
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
} else {
    console.log('error');
    i--;
    }
}
 if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
     console.log("Вы классический зритель");
 } else if (personalMovieDB.count >= 30) {
     console.log("Вы киноман");
 } else {
     console.log("Ошибка");
 }

 console.log(personalMovieDB);   */







 


/* if (4==9) {
console.log('Ok!');
}
else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}
const num = 50;
(num === 50) ? console.log('Ok!') : console.log('Error'); */


 const num = 50;
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('Верно');
        break; 
    default:
        console.log('Не в этот раз');
        break;
} 

/* let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++; 
}
while (num < 55);


for (let i = 1; i < 8; i++ ) {
    if (i===6) {
        /* break; */
/*         continue;
    }
    console.log(i);
} */ 
