'use strict';



//Передача по ссылке или по значению оператор SPREAD

 /* let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //Передает ссылку на объект
copy.a = 10;
console.log(copy);
console.log( obj); 

function copy(mainObj) {
let objCopy = {};

let key;
for (key in mainObj) {
    objCopy [key] = mainObj [key];
   }

   return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 20;
 console.log(add);
console.log(clone); 

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'assdad';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk','facebook'];
      
console.log(internet)


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);


const array = ['a', 'b'];

const newAarray = [...array];


const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; 
*/







 // Массивы
 /* const arr = [2, 13, 26, 8, 10];
 arr.sort(compareNum);
 console.log(arr);

 function compareNum(a, b) {
     return a - b; 
 }
/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

//arr.pop();
//arr.push(10);

//console.log(arr);

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for ( let value of arr) {
    console.log(value);
}
 */
/* const str = prompt("", "");
const products = str.split(", ");
products.sort();

console.log(products.join('; ')); */













//ОБЪЕКТЫ

/*  const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
 */





/* console.log(Object.keys(options).length); */ 

/* console.log(options.name);

delete options.name;

console.log(options); */
/* let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
    for ( let i in options[key]) {
        console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        counter++;
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
    }

}    
console.log(counter);
 */











//Callback функции

/* function first () {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log ('Я прошел этот урок!');
}

learnJS('JavaScript', done); */





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











/*  ЦИКЛЫ и правктическое занятие */

 /* let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}

 rememberMyFilms(); 

 
  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log("Вы классический зритель");
     } else if (personalMovieDB.count >= 30) {
         console.log("Вы киноман");
     } else {
         console.log("Ошибка");
     }
    
 }
 detectPersonalLevel(); 

 function showMyDB (hidden) {
    if(!hidden) {
      console.log(personalMovieDB);
    }
}
 showMyDB(personalMovieDB.privat); 

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] =  prompt(`Ваш любимый жанр под номером ${i}`);;
    }

}
writeYourGenres();
    */








 


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


/*  const num = 50;
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
}  */

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


/* export const encryptThis = (str: string): string => {
    // Your code goes here
          //Берет строку, которая входит в функцию, делит на слова, которые были через пробел написаны. Получается массим слов(стрингов)
                                  //стрелочная функция ( это тоже нужно будет тебе почитать)
                                  //модифицирует строку исходя из условий если слов 0
    return str.split(' ').map(s => s = s.length > 0 
                                  //то берет, меняет первый символ слова на его аналог в таблице ASCII +
                                                      //если слово состоит из 5 и больше символов
                              ? (s[0].charCodeAt(0) + (s.length > 4 
                                                      //То берет последний символ, соединяет его со 
                                                                      //словом, которое преобразовал в массив символов
                                                                                  //И, начиная со второго символа и до предпоследнего оставляет неизменным порядок символов
                                                                                                        //преобразуует массив обратно в строку
                                                                                                                  // и добавляет второй символ слова в конец
                                                       ? s[s.length-1]+s.split('').splice(2,s.length-3).join('')+s[1] 
                                                       //а если слово состоит от 1 и до 4 символов включительно
                                                        //то разделяю слова на массив символов 
                                                                    //меняю их порядок наиборот
                                                                              //Убираю первый символ, т.к. ранее заменил его на аналог в таблице ASCII
                                                                                                                //Преобразую массив в строку
                                                       : s.split('').reverse().slice(0, s.split('').length - 1).join(''))) 
                              // если слов 0 - выводит пустую строку
                                    //Делаю единой строкой с пробелами между слов
                              : '').join(' ');
  }
   */

  