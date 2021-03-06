/*-------1---------*/
/*В функции может быть больше одного оператора return. Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат, и весь код после него будет проигнорирован в текущем вызове функции.

Возьмём уже знакомую нам функцию проверки совершеннолетия. Она работает, но здесь есть «лишний» код, то есть тело функции можно оптимизировать. В данном случае подойдёт приём (паттерн) «ранний возврат».

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }

  return message;
}
Если условие в if выполняется, то есть приводится к true, возвращаем строку 'Вы совершеннолетний человек' и код ниже уже не исполнится.
Если условие в if не выполняется, то есть приводится к false, возвращаем строку 'Вы не совершеннолетний человек'.
Используя паттерн «ранний возврат» и то, что выполнение функции прерывается на операторе return, мы избавляемся от лишней переменной и блока else. То есть этот приём помогает «разгладить» ветвления.*/

function checkAge(age) {
  if (age>=18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

/*-------2---------*/

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
 
 if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  } 
    return 'Доступ запрещен, неверный пароль!';
  }

  // Пиши код выше этой строки

/*-------3---------*/

function checkStorage(available, ordered) {
  // Пиши код ниже этой строки
    if (ordered === 0) {
     return 'В заказе еще нет товаров';}
  if  (ordered > available) {
     return'Слишком большой заказ, на складе недостаточно товаров!';
 } 
    return'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
}
/*-------4---------*/
/*Массив используется для хранения упорядоченной коллекции элементов. Он объявляется открывающей и закрывающей квадратной скобками [] - литералом массива. Внутри скобок каждый элемент массива разделяется запятой.

const planets = ['Земля', 'Марс', 'Венера'];*/

// Пиши код ниже этой строки
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


/*-------5---------*/
/*Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс]. Между именем переменной массива и квадратными скобками не должно быть пробела.

Внимание
Индексация элементов массива начинается с нуля.

const planets = ['Земля', 'Марс', 'Венера'];
planets[0]; // 'Земля'
planets[2]; // 'Венера'*/

/*Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.*/

// Стартовый код
// const fruits=['яблоко','слива','груша','апельсин'];
// Пиши код ниже этой строки
const firstElement=fruits[0];
const secondElement=fruits[1];
const lastElement=fruits[3];


/*-------6---------*/
/*В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];*/

// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
fruits[1]='персик';
fruits[3]='банан';

/*-------7---------*/
/*Длина массива, то есть число его элементов, хранится в свойстве length. Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.

const planets = ['Земля', 'Марс', 'Венера'];
console.log(planets.length); // 3*/

//Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const fruitsArrayLength=fruits.length;

/*-------8---------*/
/*Чаще всего, мы заранее в коде не знаем какая будет длина массива. 
Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. 
Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

const planets = ['Земля', 'Марс', 'Венера'];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // 'Венера'*/

// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const lastElementIndex=fruits.length-1;
// const lastElement=fruits[lastElementIndex];

/*-------9---------*/
/*Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.*/

function getExtremeElements(array) {
    // Пиши код ниже этой строки
const lastElementIndex=array.length-1;
return [array[0], array[lastElementIndex]];  
    // Пиши код выше этой строки
}
/*-------10---------*/
/*Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

const name = 'Манго';
console.log(name.split('')); // ['M', 'a', 'н', 'г', 'о']

const message = 'JavaScript это интересно';
console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']*/

function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  
 words=message.split(delimeter);
 
   // Пиши код выше этой строки
  return words;
}

/*-------11---------*/
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
return message.split(" ").length * pricePerWord;

/*-------12---------*/
/*Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

const words = ['JavaScript', 'это', 'интересно'];
console.log(words.join('')); // 'JavaScriptэтоинтересно'
console.log(words.join(' ')); // 'JavaScript это интересно'
console.log(words.join('*')); // 'JavaScript*это*интересно'*/

function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 string=array.join(delimeter);
  
  // Пиши код выше этой строки
  return string;
}

/*-------13---------*/
/*Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/массивы-для-новичков.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами.
Все символы slug должны быть в нижнем регистре.
Все слова slug должна быть разделены тире.*/

function slugify(title) {
  // Пиши код ниже этой строки
 
const normalizedTitle = title.toLowerCase();

const words = normalizedTitle.split(' ');

const slug = words.join('-');
  // Пиши код выше этой строки
  
return slug;  
}
//  Должно работать и так const slug = title.toLowerCase().split(' ').join('-');
/*-------14---------*/
/*Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

Если begin и end не указаны, будет создана полная копия исходного массива.
Если не указан end, копирование будет от start и до конца исходного массива.
Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'];

console.log(planets.slice(0, 2)); // ['Земля', 'Марс']
console.log(planets.slice(0, 4)); // ['Земля', 'Марс', 'Венера', 'Юпитер']
console.log(planets.slice(1, 3)); // ['Марс', 'Венера']
console.log(planets.slice(-2)); // ['Юпитер', 'Сатурн']
console.log(planets.slice()); // ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн']*/

const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,4);
const lastThreeEls = fruits.slice(-3);

/*-------15---------*/
/*Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

const firstArray = ['Меркурий', 'Венера', 'Земля'];
const secondArray = ['Марс', 'Юпитер'];
const thirdArray = ['Сатурн', 'Уран', 'Нептун'];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Меркурий', 'Венера', 'Земля'];
console.log(allPlanets); // ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'];*/

const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку


/*-------16---------*/
/*Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

В противном случае функция должна вернуть новый массив целиком.*/

function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
const newMakeArray = firstArray.concat(secondArray);
return newMakeArray.slice(0, maxLength);
    // Пиши код выше этой строки
  }


/*-------17---------*/
/*Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.

for (Инициализация; Условие; Пост - выражение) {
  // Тело цикла
}
Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.*/

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
}


/*-------18---------*/

function calculateTotal(number) {
  // Пиши код ниже этой строки
let sumNumber = 0;
    for (let i = 0; i <= number; i += 1) {
      sumNumber += i;}
 
  return sumNumber;
  // Пиши код выше этой строки
}
 

/*-------19---------*/
/*Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ['Земля', 'Марс', 'Венера'];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.*/

// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i <fruits.length; i +=1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}

/*-------20---------*/
/*Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.*/
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (let i=0; i< order.length; i+=1) { 
total = total + order[i];}
  // Пиши код выше этой строки
  return total;
}


/*-------21---------*/
/*Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.*/

function findLongestWord(string) {
  // Пиши код ниже этой строки
 
   let longestString = "";
    let array = string.split(" ");

    for (let i = 0; i < array.length; i += 1) {
      longestString =
        array[i].length > longestString.length ? array[i] : longestString;
    }
    return longestString;
  
  // Пиши код выше этой строки
}
/*-------22---------*/
/*Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

const planets = ['Земля', 'Марс', 'Венера'];
planets.push('Юпитер');
planets.push('Сатурн', 'Уран', 'Нептун');

console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн', 'Уран', 'Нептун']*/

// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
	for (let i = min; i <= max; i += 1) {
      numbers.push(i);}
  // Пиши код выше этой строки
  return numbers;
}

/*-------23---------*/
/*Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).*/

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
let newArray = [];

    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) {
        newArray.push(numbers[i]);
      }
    }
    return newArray;

  // Пиши код выше этой строки
}

/*-------24---------*/
/*Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

const planets = ['Земля', 'Марс', 'Венера'];

console.log(planets.includes('Земля')); // true
console.log(planets.includes('земля')); // false
console.log(planets.includes('Венера')); // true
console.log(planets.includes('Юпитер')); // false*/

/*Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.*/

function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}
/*-------25---------*/
/*Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.*/

function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
	let newArray = [];
    for (let i = 0; i < array1.length; i += 1) {
      if (array2.includes(array1[i])) {
        newArray.push(array1[i]);
      }
    }
    return newArray;

    // Пиши код выше этой строки
}


/*-------26---------*/
/*Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации.
iterable — коллекция, которая имеет перечислимые элементы, например массив.
const planets = ['Земля', 'Марс', 'Венера'];

for (const planet of planets) {
  console.log(planet);
}*/

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// было for (let i = 0; i < order.length; i += 1) {total += order[i];}

function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const variable of order) {
      total += variable;
    }

  // Пиши код выше этой строки
  return total;
}

/*-------27---------*/
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
/* было
// Пиши код ниже этой строки
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки*/

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const number of numbers) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    }

  return filteredNumbers;
  // Пиши код выше этой строки
}

/*-------28---------*/
/*Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.

5 % 1 = 0
// 5, разделенное на 1, равно 5, а остаток - 0

5 % 2 = 1
//  5, разделенное на 2, равно 2, а остаток - 1

5 % 3 = 2
//  5, разделенное на 3, равно 1, а остаток - 2

5 % 4 = 1
//  5, разделенное на 4, равно 1, а остаток - 1

5 % 5 = 0
//  5, разделенное на 5, равно 1, а остаток - 0*/

// Задание
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

/*-------29---------*/
/*Проверка на четность

function isEven (num) {
  return num % 2 === 0;
}*/

/*Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.*/

function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки

let newArray = [];
    for (let i = start; i <= end; i += 1) {
      if (i % 2 === 0) {
        newArray.push(i);
      }
    }
    return newArray;
    // Пиши код выше этой строки
}
  
/*-------30---------*/
/*Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log('Нашли число 3, прерываем выполнение цикла');
    break;
  }
}
console.log('Лог после цикла');*/

// Задание
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

/*-------31---------*/
/*Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.

В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log('Нашли число 3, делаем возврат, прерывая цикл и функцию');
      return i;
    }
  }

  // Этот console.log не выполнится
  console.log('Лог после цикла в теле функции');
}

const result = fn();
console.log('Лог после выхода из функции');
console.lof(`Результат выполнения функции ${result}`);*/

/*Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

возвращала первое число от start до end, которое делится на divisor без остатка;
не использовала оператор break;
не использовала переменную number.*/

// for (let i = start; i < end; i += 1) { if (i % divisor === 0) { number = i; break;}}

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
   }
  }

   // Пиши код выше этой строки
}
/*-------32---------*/
/*Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).*/

function includes(array, value) {
  // Пиши код ниже этой строки
for (const key of array) {
      if (key === value) {
        return true;
      }
    }
    return false;

  
  // Пиши код выше этой строки
}