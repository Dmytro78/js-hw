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

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

/*----11----*/

// Метод map() и массив объектов

/*Мы уже знаем что повседневная задача это манипуляция массивом объектов.Например, получить массив значений свойства из всех объектов.Есть массив студентов, а нужно получить отдельный массив их имён.

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 }
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.*/

// Задание
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

/*Тесты
Объявлена переменная books.
Значение переменной books это массив.
Объявлена переменная titles.
Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод', 'Сон смешного человека', 'Красна как кровь', 'Враг Божий'].
Для перебора массива books используется метод map() как чистая функция.*/

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(book => book.title);
  

/*----12----*/

// Метод flatMap()

/*Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это многомерный массив который необходимо «разгладить».

массив.flatMap((element, index, array) => {
  // Тело коллбек-функции
});
В массиве students хранится список студентов со списком предметов, которые посещает студент, в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, которые посещает эта группа студентов, пока даже повторяющихся.

const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] },
];

students.map((student) => student.courses);
// [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

students.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
Он вызывает коллбек-функцию для каждого элемента исходного массива, а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().*/

// Задание

// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

/*Тесты
Объявлена переменная books.
Значение переменной books это массив объектов.
Объявлена переменная genres.
Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ].
Для перебора массива books используется метод flatMap().*/

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
  const genres = books.flatMap((book) => book.genres);

  /*-----13---*/

// Задача.Имена пользователей

/*Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];*/

// Задание
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

/*Тесты
Объявлена переменная getUserNames.

Переменной getUserNames присвоена стрелочная функция с параметром (users).

Для перебора параметра users используется метод map().

Вызов функции с указанным массивом пользователей возвращает массив ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony'].

Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки

const getUserNames = users => users.map((users) => users.name); 
  
  // Пиши код выше этой строки


/*----14----*/

// Задача. Почты пользователей

/*Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];*/

// Задание

/*Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.*/

/*Тесты
Объявлена переменная getUserNames.
Переменной getUserNames присвоена стрелочная функция с параметром (users).
Для перебора параметра users используется метод map().
Вызов функции с указанным массивом пользователей возвращает массив ['moorehensley@indexia.com', 'sharlenebush@tubesys.com', 'rossvazquez@xinware.com', 'elmahead@omatom.com', 'careybarr@nurali.com', 'blackburndotson@furnigeer.com', 'shereeanthony@kog.com'].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки

const getUserEmails = users =>  users.map((users) => users.email)

// Пиши код выше этой строки

/*----15----*/

// Методы filter и find

/*Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать более одного элемента из коллекции по какому-то критерию.

массив.filter((element, index, array) => {
  // Тело коллбек-функции
});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает новый массив.
Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
Если коллбек вернул true элемент добавляется в возвращаемый массив.
Если коллбек вернул false элемент не добавляется в возвращаемый массив.
Если ни один элемент не удовлетворил условию, возвращает пустой массив.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]
То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если результат её выполнения true, текущий элемент добавляет в новый массив.*/

// Задание
/*Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().*/

/*Тесты
Объявлена переменная numbers.
Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73].
Объявлена переменная evenNumbers.
Значение переменной evenNumbers это массив [24, 82, 36, 18, 52].
Объявлена переменная oddNumbers.
Значение переменной oddNumbers это массив [17, 61, 47, 73].
Для перебора массива numbers использован метод filter().*/

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 != 0);

/*-----16---*/

// Фильтрация уникальных элементов

/*Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. Этот приём работает только с массивом примитивных значений - не объектов.

Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] }
];

const allCourses = students.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

# Массив всех курсов
['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
Для элемента 'математика' под индексом 0:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 0.
Они равны, значит это уникальный элемент.
Для элемента 'математика' под индексом 3:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 3.
Они не равны, значит это повторяющийся - не уникальный элемент.*/

  // Задание

/*Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.*/

/*Тесты
Объявлена переменная books.
Значение переменной books это массив объектов.
Объявлена переменная allGenres.
Значение переменной allGenres это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы', 'мистика', 'приключения'].
Объявлена переменная uniqueGenres.
Значение переменной uniqueGenres это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы'].
Для вычисления значения переменной allGenders использован метод flatMap().
Для вычисления значения переменной uniqueGenres использован метод filter().*/

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter((book,index,array) => array.indexOf(book) === index);

/*-----17-----*/

// Метод filter() и массив объектов

/*При работе с массивом объектов выполняется фильтрация по значению какого - то свойства.В результате получается новый массив отфильтрованных объектов.

Например, есть массив студентов с баллами за тест. Необходимо отфильтровать лучших (балл выше 80), худших (балл ниже 50) и средних студентов (балл от 50 до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон*/

// Задание

/*Используя метод filter() дополни код так, чтобы:

В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.*/

  /*Тесты
Объявлена переменная books.
Значение переменной books это массив объектов.
Объявлена переменная MIN_RATING.
Значение переменной MIN_RATING это число 8.
Объявлена переменная AUTHOR.
Значение переменной AUTHOR это строка 'Бернард Корнуэлл'.
Объявлена переменная topRatedBooks.
Значение переменной topRatedBooks это массив книг с рейтингов выше 8.
Объявлена переменная booksByAuthor.
Значение переменной booksByAuthor это массив книг автор которых 'Бернард Корнуэлл'.
Для перебора массива books использован метод filter().*/

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book)=> book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book)=> book.author === AUTHOR);

/*----18------*/

// Задача. Пользователи с цветом глаз

/*Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]*/

// Задание

/*Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.* /

/*Тесты
Объявлена переменная getUsersWithEyeColor.
Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color).
Для перебора параметра users используется метод filter().
Если значение параметра color это 'blue', функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr.
Если значение параметра color это 'green', функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head.
Если значение параметра color это 'brown', функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony.
Если значение параметра color это любая другая строка, функция возвращает пустой массив.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки

const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

// Пиши код выше этой строки

/*----19------*/

// Задача. Пользователи в возрастной категории

/*Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
]*/

// Задание

/*Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых(свойство age) попадает в промежуток от minAge до maxAge.* /

/*Тесты
Объявлена переменная getUsersWithAge.
Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge).
Для перебора параметра users используется метод filter().
Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr.
Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony.
Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив.
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.*/

// Пиши код ниже этой строки

const getUsersWithAge = (users, minAge, maxAge) => users.filter(({age})=> age >= minAge && age < maxAge);

// Пиши код выше этой строки
