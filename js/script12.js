'use strict';

/*  ЦИКЛЫ и правктическое занятие урок 24 */

/* const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while ( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
    
    rememberMyFilms: function() {
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
    },
  
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
             console.log("Вы классический зритель");
         } else if (personalMovieDB.count >= 30) {
             console.log("Вы киноман");
         } else {
             console.log("Ошибка");
         }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
          console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
        personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre =   prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели вообще')
            i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

 */

  

 


  




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

/* 
                            МЕТОД Splice
                //Удаляем элемент
let array = ['blue', 'white', 'black', 'yellow', 'pink'];
array.splice(2,2);
console.log(array);

            // Удаляем элемент и возвращаем в переменную
let secondArr = ['blue', 'white', 'black', 'yellow', 'pink'];
let element = secondArr.splice(1,1);
console.log(secondArr);
console.log(element);

                // Заменяем элемент
let threeArr = ['blue', 'white', 'black', 'yellow', 'pink'];
threeArr.splice(0, 1, 'Коля');
console.log(threeArr);

            // Добавляем элемент
let fourArr = ['blue', 'white', 'black', 'yellow', 'pink'];
fourArr.splice(0, 1, 'Миша', 'Петя');
console.log(fourArr);

                // Удаляем элемент с конца
let fiveArr = ['blue', 'white', 'black', 'yellow', 'pink'];
fiveArr.splice(-1,2);
console.log(fiveArr);

                Метод slice = Копирование массивов
let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
    let copyFirstArr = firstArr.slice();
    console.log(copyFirstArr);

         КОПИРУЕМ ЧАСТЬ МАССИВА
    let twoArr = ['blue', 'white', 'black', 'yellow', 'pink'];
    let copyTwoArr = twoArr.slice(0, 1);
    console.log(copyTwoArr);


                Метод concat = Создание нового массива, который копирует данные из других массивов

    let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
    let concFirstArr = firstArr.concat('Иван');
    console.log(concFirstArr);


                     //Поиск в массиве

                 // indexOf(элемент, с какой позиции искать) - ищет и возвращает индекс искомого элемента

    let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
    console.log(firstArr.indexOf('yellow', 0));


             //lastIndexOf() - тоже самое но начинает справа налево


              includes() - ищет и возвращает true если нашёл
    let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
    console.log(firstArr.includes('blue', 0))

                 //find - ПОИСК ОБЪЕКТА В МАССИВЕ
    let arr = [
        { name: 'Вася', age: 20 },
        { name: 'Наташа', age: 23},
        { name: 'Максим', age: 24}
    ]
    let resultArr = arr.find(function (item, index, array) {
        return item.age == 20;
    });
    console.log(resultArr)

    let resultArr = arr.find(item => item.age === 20);
    console.log(resultArr);


                  filter - Метод ищет все элементы, на которых функция-колбэк вернёт true. Возвращает массив из всех элементов которые подходят к условию

    let arr = [
        { name: 'Вася', age: 20 },
        { name: 'Наташа', age: 23},
        { name: 'Максим', age: 24}
    ]

    let arrNew = arr.filter(function (item, index, array) {
        return item.age >= 21;
    });
    console.log(arrNew);
    

    let arrNew = arr.filter(item => item.age >= 21);
    console.log(arrNew);

                    Метод sort()
    let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
    console.log(firstArr.sort());

            Сортировка чисел в массиве
   let arr = [10, 6, 3, 11, 15];
   
   function compareNum(a, b) {
       return a - b;
   }  
   console.log(arr);
    console.log(arr.sort(compareNum));


                    Метод map
    ВЫЗЫВАЕТ ФУНКЦИЮ ДЛЯ КАЖДОГО ЭЛЕМЕНТА МАССИВА И ВОЗВРАЩАЕТ МАССИВ РЕЗУЛЬТАТОВ ВЫПОЛНЕНИЯ ЭТОЙ ФУНКЦИИ
    
    let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
   1) let mapArr = firstArr.map(function(item, index, array) {
        return item[0]
    });
   2) let mapArr = firstArr.map(item => item[0])
    console.log(firstArr);
    console.log(mapArr);
 

           

            МЕТОД split
ПРЕОБРАЗОВЫВАЕТ СТРОКУ В МАССИВ ПО ЗАДАННОМУ РАЗДЕЛИТЕЛЮ
    let str = 'Белый, Красный, Черный';
    let arr = str.split(',');
    console.log(arr);

            МЕТОД join
 ПРЕОБРАЗОВЫВАЕТ МАССИВ В СТРОКУ     
 let arr = ['Белый', 'Красный', 'Черный'];
    let str = arr.join(',');
    console.log(str);      



            ПЕРЕБОР ЭЛЕМЕНТОВ  FOR OF
let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
    for(let arrItem of firstArr) {
        console.log(arrItem);
    }
                    forEach 
        ВЫПОЛНЯЕТ ФУНКЦИЮ ДЛЯ КАЖДОГО ЭЛЕМЕНТА МАССИВА
  let firstArr = ['blue', 'white', 'black', 'yellow', 'pink'];
  1) firstArr.forEach(function(item, index, array){
      console.log(`${item} это ${index} элемент в массиве ${array}`);
  }); 
  2) firstArr.forEach((item, index, array) => {
    console.log(`${item} это ${index} элемент в массиве ${array}`);
  });               
*/






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

  
// Задача от Санька
/* Попросите пользователя ввести сумму денег (типа ставка на забег лошади. исход боксерского соревнования) Сгенерируйте случайное число в диапазоне от -5 до 5. Выведите пользователю информацию о том, что он "выиграл" или "проиграл" с такой логикой если случайное число отрицательное или ровно 0-то он "не угадал" со своей ставкой. Если число положительное, то вы умножаете сумму ставки на это число и выводите пользователю, что он выиграл ... гривен. Например, пользователь ввел 1000, выпало число 5 -выиграл 5000 
К этой задаче прибавь вот такое условие :
Сначала у тебя уже есть 1000. Пользователь может ввести число от 0 и до 1000 в качестве ставки. Если выиграл, то все то же, если проиграл, то минусовать введенную ставку из общего банка его.
Если баланс 0 или меньше - закончить игру
Короч, дополнение к задаче. Пользователь ещё может ввести ставку. Ставка может быть как числом так и строкой "белое" или "черное". Если вводил числом и угадал число, которое выпало рандомом(рандом лучше переделать от 0 до 10 допустим), то выигрыш это будет не только умножаение на это рандомное число, но и дополнительно умножается на 2.
Если пользователь ввёл текстом черное или белое, то нужно сгенерировать и на этот случай рандом. Если он угадал этот рандом, то его выигрыш составляет половину банка.
*/
  /* let bank = 1000;

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

   function getRandomColor('black', 'white') {
    return Math.round(Math.random() * 1)
  }
  getRandomColor()
  while (bank > 0) {

let sumMoney = +prompt("Введите ставку", "300");
let checkColors = getRandomColor('black', 'white');
let randomNumber = randomNum(0, 10);

  if (randomNumber > 5) {
      if (sumMoney <= 1000) {
    let Win = sumMoney * randomNumber * 2;
    bank += Win;
    alert(` Выиграл ${Win} Ваш банк: ${bank}`);
      }
      else if(sumMoney == 'black' && sumMoney == 'white') {
          Win += bank / 2; 
      }
  } else if (randomNumber <= 5){
    bank -= sumMoney;
    alert(`Не угадал, ваш банк: ${bank}`);

    }
}   
if (bank <= 0) {
    alert('Игра окончена');
}
  console.log(randomNumber);
 
  let bank = 1000;

  function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    
  
    while (bank > 0) {
      
      let sumMoney = +prompt("Введите ставку", "300");
      let randomNumber = randomNum(-5, 5);
    if (randomNumber > 0) {
      let Win = sumMoney * randomNumber;
      bank += Win;
      alert( `Выиграл ${Win} Ваш банк: ${bank}`);
      
    } else if (randomNumber <= 0){
      bank -= sumMoney;
      alert(`Не угадал, ваш банк: ${bank}`);
      } 
  }  
  if (bank <= 0) {
    alert('Игра окончена');
} 
    console.log(randomNumber);
 */

    let x = 5;
   alert(x++);