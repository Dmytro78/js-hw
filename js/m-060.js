/*---01---*/

// Метод forEach(callback)

/*Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});
Поэлементно перебирает массив.
Вызывает коллбек-функцию для каждого элемента массива.
Ничего не возвращает.
Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});
Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.*/

// Задание

/*Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/

/*Тесты
Объявлена функция calculateTotalPrice(orderedItems).
Для перебора массива orderedItems использован метод forEach.
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
  /*for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }*/

    orderedItems.forEach(function (order) {
    totalPrice += order;
  });
   
  // Пиши код выше этой строки
  return totalPrice;
}

/*----02----*/

// Задача. Фильтрация массива чисел

/*Задание
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/

/*Тесты
Объявлена функция filterArray(numbers, value).
Для перебора массива numbers использован метод forEach.
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
    /*for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    }*/

     numbers.forEach( function (number) {
    if (number > value) {
        filteredNumbers.push(number);
      }});
     
    // Пиши код выше этой строки
    return filteredNumbers;
  }

/*----03----*/

// Задача.Общие элементы

/*Задание
Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.*/

/*Тесты
Объявлена функция getCommonElements(firstArray, secondArray).
Для перебора параметра (массива) использован метод forEach.
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
    /* for (let i = 0; i < firstArray.length; i += 1) {
      if (secondArray.includes(firstArray[i])) {
        commonElements.push(firstArray[i]);
      }
    }*/
firstArray.forEach (function (arr) {
     if (secondArray.includes(arr)) {
        commonElements.push(arr);
      }
    }
  )
 
    return commonElements;
    // Пиши код выше этой строки
  }

/*-----04---*/

// Стрелочные функции.

/*Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.

Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};
Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.

Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

const add = (a, b, c) => {
  return a + b + c;
};
Если параметр один, его объявление может быть без круглых скобок.

const add = a => {
  return a + 5;
};
Если параметров нет, то обязательно должны быть пустые круглые скобки.

const greet = () => {
  console.log('Привет!');
};*/

// Задание

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

/*Тесты
Объявлена переменная calculateTotalPrice.
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
Вызов calculateTotalPrice(5, 100) возвращает 500.
Вызов calculateTotalPrice(8, 60) возвращает 480.
Вызов calculateTotalPrice(3, 400) возвращает 1200.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки
/*function calculateTotalPrice(quantity, pricePerItem) {*/
const calculateTotalPrice = (quantity, pricePerItem) => {    
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

/*----05----*/

// Неявный возврат

/*В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. Это называется явный возврат (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие-то инструкции кроме возврата значения.

const add = (a, b, c) => a + b + c;
Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return). В примере вернётся результат выражения сложения параметров a, b и c.

Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;*/

// Задание
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

/*Тесты
Объявлена переменная calculateTotalPrice.
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem).
В функции использован неявный возврат.
Вызов calculateTotalPrice(5, 100) возвращает 500.
Вызов calculateTotalPrice(8, 60) возвращает 480.
Вызов calculateTotalPrice('3, 400) возвращает 1200.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки
/*const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};*/

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Пиши код выше этой строки


/*----06----*/

// Стрелочные функции как коллбеки

/*Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, особенно если не нужно тело функции.

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});
Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);*/

// Задание

/*Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.* /

/*Тесты
Объявлена переменная calculateTotalPrice.
Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems).
Для перебора массива orderedItems использован метод forEach.
Коллбек для метода forEach это стрелочная функция.
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки
/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (item) {
    totalPrice += item;
  });
  return totalPrice;
}*/

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
}

// Пиши код выше этой строки

/*-----07---*/

// Задача.Фильтрация массива чисел 2.0

// Задание

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

/*Тесты
Объявлена переменная filterArray.
Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value).
Для перебора массива numbers использован метод forEach.
Коллбек для метода forEach это стрелочная функция.
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки
/*function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    numbers.forEach(function (number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });*/

  const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }
   
/*-----08-----*/

// Задача. Общие элементы 2.0

// Задание

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

/*Тесты
-Объявлена переменная getCommonElements.

Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray).
Для перебора массива firstArray использован метод forEach.
Коллбек для метода forEach это стрелочная функция.
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки
/*function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
  
    firstArray.forEach(function (element) {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });*/
  
  const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
  }


/*----09------*/

// Чистые функции

/*Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, изменять значение аргументов ссылочного типа, выполнять операции ввода - вывода и т.п.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]
Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.

Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]*/

// Задание

/*Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.*/

/*Тесты
Объявлена функция changeEven(numbers, value).
Функция changeEven не изменяет значение параметра numbers.
Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    /*for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        numbers[i] = numbers[i] + value;
      }
    }*/
  let newNumbers = [];
    numbers.forEach((number) => {
      if (number % 2 === 0) {
        newNumbers.push(number + value);
      } else {
        newNumbers.push(number);
      }
    });
    return newNumbers;
    // Пиши код выше этой строки
  }