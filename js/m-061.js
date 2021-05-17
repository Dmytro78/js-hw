/*---10---*/

// Метод map()

/*Большинство перебирающих методов массива это чистые функции.Они создают новый массив, заполняют его, применяя к значению каждого элемента указанную коллбек - функцию, после чего возвращают этот новый массив.

Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

массив.map((element, index, array) => {
  // Тело коллбек-функции
});
Поэлементно перебирает оригинальный массив.
Не изменяет оригинальный массив.
Результат работа коллбек-функции записывается в новый массив.
Возвращает новый массив такой же длины.
Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, на базе которого можно сделать другую коллекцию.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']
Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления коллбек-функции, делая код чище и проще для восприятия.*/

// Задание

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.Обязательно используй метод map().

/*Тесты
Объявлена переменная planets.
Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
Объявлена переменная planetsLengths.
Значение переменной planetsLengths это массив [5, 4, 6, 6].
Для перебора массива планет использован метод map().*/



/*----11----*/



/*----12----*/


/*-----13---*/


/*----14----*/


/*----15----*/



/*-----16---*/


/*-----17-----*/



/*----18------*/


/*----19------*/



