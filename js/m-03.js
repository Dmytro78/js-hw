/*--------1----------*/
/*Объекты позволяют описать и сгруппировать характеристики объектов реального мира - пользователя, книги, продукта магазина, чего угодно. Объекты ещё называют словарями, то есть они содержат термины (свойства) и их определения (значения).

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};
Для объявления используются фигурные скобки {} - литерал объекта. При создании объекту можно добавить свойства, каждое из которых описывается парами ключ:значение. Ключ ещё называют именем свойства и это всегда строка. Значением свойства могут быть любые типы: примитивы, массивы, объекты, були, функции и т. п. Свойства разделяются запятой.*/

const apartment = {
imgUrl:'https://via.placeholder.com/640x480',
descr: 'Просторная квартира в центре',
rating: 4,
price: 2153,
tags:['premium', 'promoted', 'top'],
};

/*---------2---------*/
/*Значением свойства может быть другой объект. Это используется для хранения вложенных и группированных данных.

Например, статистика пользователя социальной сети состоит из количества последователей, просмотров и лайков, и хранить эти данные удобнее всего в виде объекта. Тоже самое с местоположением, отдельно страна и город.

В будущем это можно будет использовать для поиска пользователей по стране, городу, минимальному или максимальному количеству последователей и т. д.

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};*/

// Задание
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце.
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  	owner:{
    	name: 'Генри',
		phone: '982-126-1588',
		email: 'henry.carter@aptmail.com',
    },
};

/*----------3---------*/
/*Первый способ получить доступ к свойству объекта это синтаксис обьект.ключ_свойства. Синтаксис «через точку» используется в большинстве случаев и подходит тогда, когда мы заранее знаем имя (ключ) свойства к которому хотим получить доступ.

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // 'Последнее королевство'

const bookGenres = book.genres;
console.log(bookGenres); // ['историческая проза', 'приключения']

const bookPrice = book.price;
console.log(bookPrice); // undefined*/

// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Пиши код выше этой строки

/*------------4----------*/
/*const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  hobbies: ['swiming', 'music', 'sci-fi'],
};
Для доступа к вложенным свойствам используется цепочка обращений «через точку». Например, если необходимо получить значение страны пользователя, записываем user.location.country, где user.location это обращение (путь) к объекту в свойстве location, а user.locaton.country обращение к свойству country в этом объекте. То есть, «точка» указывает следующую вложенность.

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // 'Jamaica'
Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому массиву. Далее, можно получить доступ к его элементам через квадратные скобки и индекс или использовать свойства и методы.

const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3*/

// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Пиши код выше этой строки

/*-----------5------------*/

/*Второй способ получить доступ к свойству объекта это синтаксис обьект["ключ_свойства"]. Похоже на обращение к элементу массива с отличием в том, что в скобках указывается не индекс элемента, а имя свойства как строка.

Синтаксис «квадратных скобок» используется значительно реже. Как правило в случаях когда имя свойства заранее неизвестно или оно хранится в переменной (как значение параметра функции, например).

На место обращения будет возвращено значение свойства с таким именем.
Если в объекте нет свойства с таким именем, на место обращения вернётся undefined.
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

const bookTitle = book['title'];
console.log(bookTitle); 
// 'Последнее королевство'

const bookGenres = book['genres'];
console.log(bookGenres); 
// ['историческая проза', 'приключения']

const propKey = 'author';
const bookAuthor = book[propKey];
console.log(bookAuthor); 
// 'Бернард Корнуэлл'*/

// Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Пиши код выше этой строки

/*-------------6-------------*/

/*После того, как объект создан, значение его свойств можно изменить. Для этого необходимо обратиться к ним по имени, например, «через точку», и присвоить новое значение.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

book.rating = 9;
book.public = false;
book.genres.push('драма');

console.log(book.rating); // 9
console.log(book.public); // false
console.log(book.genres); // ['историческая проза', 'приключения', 'драма']*/

// Задание
/*Дополни код обновив значения свойств объекта apartment:

цену в свойстве price на 5000;
рейтинг квартиры в свойстве rating на 4.7;
имя владельца во вложенном свойстве name на 'Генри Сибола';
массив тегов в свойстве tags добавив в конец строку 'trusted'*/

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Генри Сибола';
apartment.tags.push('trusted');

/*------------7--------------*/

/*Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения уже существующего свойства. Если при записи значения по имени, такого свойства в объекте нет, оно будет создано.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // 'en'
console.log(book.translations); // ['ua', 'ru']*/

// Задание
// Добавь объекту apartment несколько новых свойств:

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  }

};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Ямайка';
apartment.location.city = 'Кингстон';

/*------------8--------------*/
/*Иногда, при создании объекта, значение свойства необходимо взять из переменной или параметра функции с таким же именем, как и само свойство.

Синтксис в следующем примере слишком громоздкий, потому что приходится дублировать имя свойства и имя переменной, в которой хранится необходимое значение.

const name = 'Генри Сибола';
const age = 25;

const user = {
  name: name,
  age: age
};

console.log(user.name); // 'Генри Сибола'
console.log(user.age); // 25
Синтаксис коротких свойств (shorthand properties) решает эту проблему, позволяя использовать имя переменной как имя свойства, а её значение как значение свойства.

const name = 'Генри Сибола';
const age = 25;

const user = {
  name,
  age
};

console.log(user.name); // 'Генри Сибола'
console.log(user.age); // 25
То есть, при объявлении объекта достаточно указать только имя свойства, а значение будет взято из переменной с аналогичным именем.*/

// Задание
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

const name = 'Ремонтный дроид';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Пиши код ниже этой строки
	name,
	price,
	image,
	tags
  // Пиши код выше этой строки
};

/*------------9------------*/
/*Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем, которое мы заранее не знаем, потому что оно хранится как значение переменной или как результат выполнения функции.

Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через квадратные скобки, что не совсем удобно.

const propName = 'name';
const user = {
  age: 25
};

user[propName] = 'Генри Сибола';
console.log(user.name); // 'Генри Сибола'
Синтаксис вычисляемых свойств (computed properties) помогает избежать лишнего кода и в некоторых случаях упростить его. Значением вычисляемого свойства может быть любое валидное выражение.

const propName = 'name';
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: 'Генри Сибола'
};

console.log(user.name); // 'Генри Сибола'*/


// Задание
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
  [emailInputName]:'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',
   
  // Пиши код выше этой строки
};


/*------------10--------------*/
/*В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя перебрать циклами for или for...of. Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object.

for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла. На каждой итерации в неё будет записано значение ключа (имя) свойства. Для того чтобы получить значение свойства с таким ключом (именем), используется синтаксис квадратных скобок.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}*/

// Задание
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки

for (const key in apartment) {
    keys.push(key);
	values.push(apartment[key]);
}

/*============11================*/
/*
Метод hasOwnProperty()
Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4
Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте dog - это несобственное свойство из объекта animal.

Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.

// ❌ Возвращает true для всех свойств
console.log('name' in dog); // true
console.log('legs' in dog); // true

// ✅ Возвращает true только для собственных свойств
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('legs')); // false
Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }

  // Если это не собственное свойство - ничего не делаем
}*/

// Задание
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
	if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
    }
  // Пиши код выше этой строки
}


/*============12 =========*/
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
for (const key in object) {
      if (object.hasOwnProperty(key)) {
        propCount++;
      }
    }
  // Пиши код выше этой строки
  return propCount;
}


/*------13-------- */

/*Метод Object.keys()
У встроенного класса Object есть несколько полезных методов для работы с объектами. 
Первый из них это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств. Если в объекте нет свойств, метод вернёт пустой массив.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта, не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  // Ключ
  console.log(key);
  // Значение свойства
  console.log(book[key]);
}
Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.*/

// Задание
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

/*--------14---------- */
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
function countProps(object) {
  // Пиши код ниже этой строки

  /*let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  } */

  let propCount = Object.keys(object).length

  return propCount;
  // Пиши код выше этой строки
}


/*-------15---------*/

/*Метод Object.values()
Если метод Object.keys(obj) возвращает массив ключей собственных свойств объекта, то метод Object.values(obj) возвращает массив значений его собственных свойств. Если в объекте нет свойств, метод Object.values(obj) вернёт пустой массив.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

const values = Object.values(book);
console.log(values); // ['Последнее королевство', 'Бернард Корнуэлл', 8.38]
Массив значений свойств также можно перебрать циклом for...of, например для получения общей суммы числовых значений.*/

// Задание
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);


/*---------16----------*/
// Задание
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
	const propCount = Object.keys(salaries).length;
    const values = Object.values(salaries);

    for (let i = 0; i < propCount; i++) {
      totalSalary += values[i];
    }
  
  // Пиши код выше этой строки
  return totalSalary;
}

/*----------17-----------*/

/*В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
  {
    title: 'Сон смешного человека',
    author: 'Федор Достоевский',
    rating: 7.75,
  },
];
Для перебора такого массива используется стандартный цикл for...of. Значения свойств каждого объекта можно получить используя синтаксис «через точку», так как в каждом объекте набор свойств и их имена будут одинаковые, отличаются только значения.

for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}*/


// Задание
// Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
 for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb) 
 }


/*---------18----------*/

// Поиск объекта по значению свойства
// Задание
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

/*Тесты
Объявлена функция getProductPrice(productName).
Вызов getProductPrice('Радар') возвращает 1300.
Вызов getProductPrice('Захват') возвращает 1200.
Вызов getProductPrice('Сканер') возвращает 2700.
Вызов getProductPrice('Дроид') возвращает 400.
Вызов getProductPrice('Двигатель') возвращает null.*/

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
      if (product.name === productName) {
        return product.price;
      }
  } 
return null;   
  // Пиши код выше этой строки
}


/*--------------19------------- */

// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

/*Тесты
Объявлена функция getAllPropValues(propName).
Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
Вызов getAllPropValues('category') возвращает [].*/

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const values = [];
    for (const product of products) {
        if (product[propName]) {
            values.push(product[propName]);
        }
        }
      
     return values;

  // Пиши код выше этой строки
}


/*-------------20---------------*/

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

/*Тесты
Объявлена функция calculateTotalPrice(productName).
Вызов calculateTotalPrice('Бластер') возвращает 0.
Вызов calculateTotalPrice('Радар') возвращает 5200.
Вызов calculateTotalPrice('Дроид') возвращает 2800.
Вызов calculateTotalPrice('Захват') возвращает 10800.
Вызов calculateTotalPrice('Сканер') возвращает 8100.*/

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let totalPrice = 0;
  
	for (const product of products) {
        if (productName === product['name']) {
            totalPrice+=product['price']*product['quantity'];
        }
        }
      
     return totalPrice;

  // Пиши код выше этой строки
}


/*-----------21----------------*/

/*Деструктуризация объектов
Сложные данные всегда представлены объектом. Множественные обращения к свойствам объекта визуально загрязняют код.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? 'публичном' : 'закрытом';
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. Это делает код в месте их использования менее «шумным».

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public: true,
  rating: 8.38,
};

// Деструктуризируем
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? 'публичном' : 'закрытом';
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
Деструктуризация всегда находится в левой части операции присвоения. Переменным внутри фигурных скобок присваиваются значения свойств объекта. Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined. Порядок объявления переменных в фигурных скобках не важен.*/

// Задание
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

/*Тесты
Объявлена переменная highTemperatures.
Значение переменной highTemperatures это объект.
Объявлена переменная yesterday с помощью деструктуризации.
Значение переменной yesterday это число 28.
Объявлена переменная today с помощью деструктуризации.
Значение переменной today это число 26.
Объявлена переменная tomorrow с помощью деструктуризации.
Значение переменной tomorrow это число 33.
Объявлена переменная meanTemperature.
Значение переменной meanTemperature это число 29.
Используется синтаксис деструктуризации объекта highTemperatures.*/


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
/*const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;*/

const {yesterday,today,tomorrow } = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;



/*---------22----------*/

/*Значения по умолчанию
Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств, можно задать переменным значения по умолчанию, которые будут присвоены только в случае когда в объекте нет свойства с таким именем.

const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = 'https://via.placeholder.com/640/480',
  author,
} = book;

console.log(title); // Последнее королевство
console.log(author); // Бернард Корнуэлл
console.log(coverImage); // https://via.placeholder.com/640/480*/

// Задание
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

/*Тесты
Объявлена переменная highTemperatures.
Значение переменной highTemperatures это объект.
Объявлена переменная highTemperatures.
Значение переменной highTemperatures это объект.
Объявлена переменная yesterday с помощью деструктуризации.
Значение переменной yesterday это число 28.
Объявлена переменная today с помощью деструктуризации.
Значение переменной today это число 26.
Объявлена переменная tomorrow с помощью деструктуризации.
Значение переменной tomorrow это число 33.
Объявлена переменная icon с помощью деструктуризации.
Значение переменной icon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
Используется деструктуризация объекта.*/


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

/*const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;
const icon = highTemperatures.icon;*/

const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',} = highTemperatures;


// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

/*----------23---------------*/

/*Изменение имени переменной
При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.

const firstBook = {
  title: "Последнее королевство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Последнее королевство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480
Такая запись читается как «Создать переменную firstTitle, в которую поместить значение свойства title из объекта firstBook» и т. д.*/

// Задание
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

/*Тесты
Объявлена переменная highTemperatures.
Значение переменной highTemperatures это объект.
Объявлена переменная highYesterday.
Значение переменной highYesterday это число 28.
Объявлена переменная highToday.
Значение переменной highToday это число 26.
Объявлена переменная highTomorrow.
Значение переменной highTomorrow это число 33.
Объявлена переменная highIcon.
Значение переменной highIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
Используется деструктуризация объекта.*/

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

/*const highYesterday = highTemperatures.yesterday;
const highToday = highTemperatures.today;
const highTomorrow = highTemperatures.tomorrow;
const highIcon = highTemperatures.icon;*/
const { yesterday: highYesterday, 
       today: highToday, 
       tomorrow: highTomorrow, 
       icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',} 
= highTemperatures;


// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

/*--------24---------*/

/*При переборе массива объектов циклом for...of получаются множественные обращения к свойствам объекта.

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    rating: 8.38,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}*/

// Задание
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

/*Тесты
Объявлена переменная colors.
Значение переменной colors это массив.
Объявлена переменная hexColors.
Значение переменной hexColors это массив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b'].
Объявлена переменная rgbColors.
Значение переменной rgbColors это массив ['244,67,54', '33,150,243', '76,175,80', '255,235,59'].
Для перебора массива используется цикл for...of.
В цикле for...of используется деструктуризация объекта.*/

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

/*for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}*/

for (const {hex,rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

/*--------25--------*/

/*Глубокая деструктуризация
Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308*/


// Задание
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.

/*Тесты
Объявлена переменная forecast.
Значение переменной forecast это объект.
Объявлена переменная highToday с помощью деструктуризации.
Значение переменной highToday это число 32.
Объявлена переменная lowToday с помощью деструктуризации.
Значение переменной lowToday это число 28.
Объявлена переменная todayIcon с помощью деструктуризации.
Значение переменной todayIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'.
Объявлена переменная highTomorrow с помощью деструктуризации.
Значение переменной highTomorrow это число 31.
Объявлена переменная lowTomorrow с помощью деструктуризации.
Значение переменной lowTomorrow это число 27.
Объявлена переменная tomorrowIcon с помощью деструктуризации.
Значение переменной tomorrowIcon это строка 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
Используется синтаксис деструктуризации объекта highTemperatures.*/

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки

/*const highToday = forecast.today.high;
const lowToday = forecast.today.low;
const todayIcon = forecast.today.icon;

const highTomorrow = forecast.tomorrow.high;
const lowTomorrow = forecast.tomorrow.low;
const tomorrowIcon = forecast.tomorrow.icon;*/

const {
    today: {
      low: lowToday,
      high: highToday,
      icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
    },
    tomorrow: {
      low: lowTomorrow,
      high: highTomorrow,
      icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
    },
} = forecast;
  

/*---------26----------*/

/*Паттерн «Объект настроек»
Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// ❌ Что такое 736? Что такое 10283? Что такое true?
doStuffWithBook('Последнее королевство', 736, 10283, 8.38, true);
Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.

function doStuffWithBook(book) {
  // Делаем что-то со свойствами объекта
  console.log(book.title);
  console.log(book.numberOfPages);
  // И так далее
}
Тогда во время её вызова передаём один объект с необходимыми свойствами.

// ✅ Всё понятно
doStuffWithBook({
  title: 'Последнее королевство',
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});
Ещё один плюс в том, что можно деструктуризировать объект в параметре book.

// Это можно сделать в теле функции.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// Или в сигнатуре (подписи), разницы нет.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}*/

// Задание
/*Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.*/

/*Тесты
Объявлена функция calculateMeanTemperature(forecast).
В теле функции используется деструктуризация объекта.
В теле функции объявлена переменная todayHigh с помощью деструктуризации.
В теле функции объявлена переменная todayLow с помощью деструктуризации.
В теле функции объявлена переменная tomorrowLow с помощью деструктуризации.
В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации.
Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5.
Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37.*/

//Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
 /* const todayLow = forecast.today.low;
  const todayHigh = forecast.today.high;
  const tomorrowLow = forecast.tomorrow.low;
  const tomorrowHigh = forecast.tomorrow.high;*/

const {
      today: { low: todayLow, high: todayHigh },
      tomorrow: { low: tomorrowLow, high: tomorrowHigh },
    } = forecast;  

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

/*------------27------------*/

/*Операция spread при передаче аргументов
Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.

const temps = [14, -4, 25, 8, 11];

// В консоли будет массив
console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
console.log(Math.max(temps)); // NaN

// В консоли будет набор отдельных чисел
console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
console.log(Math.max(...temps)); // 25
То есть запись Math.max(...[14, -4, 25, 8, 11]), после интерпретации превращается в Math.max(14, -4, 25, 8, 11) - синтаксис ... возвращает распакованный массив, то есть распыляет его элементы как отдельные аргументы.*/

// Задание
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

/*Тесты
Объявлена переменная scores.
Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26].
Объявлена переменная bestScore.
Значение переменной bestScore это число 93.
Объявлена переменная worstScore.
Значение переменной worstScore это число 17.
Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores.
Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores.*/

const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
/*const bestScore = scores;
const worstScore = scores;*/
const bestScore = (Math.max(...scores));
const worstScore = (Math.min(...scores));

/*-----------28-------------*/

/*Операция spread при создании нового массива
Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.

const temps = [14, -4, 25, 8, 11];

// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
В примере выше у нас есть ящик яблок temps и мы хотим сделать его точную копию. Берём пустой ящик и пересыпаем в него яблоки из исходного ящика temps - распыляем его в другую коллекцию. При этом ящик temps не изменится, в нём все ещё будут яблоки, а в новом ящике - их точные копии.

В следующем примере мы ссыпаем яблоки из двух ящиков в один новый. Оригинальные ящики (массивы) не изменятся, а в новом будут копии всех их яблок (элементов). Порядок распыления важен - он влияет на порядок элементов в новой коллекции.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]*/

// Задание
/*В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл.*/

/*Тесты
Объявлена переменная firstGroupScores.
Значение переменной firstGroupScores это массив [64, 42, 93].
Объявлена переменная secondGroupScores.
Значение переменной secondGroupScores это массив [89, 14, 51, 26].
Объявлена переменная thirdGroupScores.
Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81].
Объявлена переменная allScores.
Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81].
Объявлена переменная bestScore.
Значение переменной bestScore это число 97.
Объявлена переменная worstScore.
Значение переменной worstScore это число 14.
При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива.
Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores.
Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores.*/

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
/*const allScores = [];
const bestScore = allScores;
const worstScore = allScores;*/
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = (Math.max(...allScores));
const worstScore = (Math.min(...allScores));


/*-------29----------*/

/*Операция spread при создании нового объекта
Операция spread позволяет распылить свойства произвольного количества объектов в один новый.

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
Если бы яблоки в ящике имели наклейки с метками, то в одном ящике не может быть двух яблок с одинаковыми метками. Поэтому при пересыпании второго ящика, все яблоки, метки которых совпадут с теми что уже есть в новом, заменят те что уже есть.

Во время распыления можно добавлять свойства в произвольное место. Главное помнить про уникальность имени свойства и о том, что его значение может быть перезаписано.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }*/

// Задание
/*В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.*/

/*Тесты
Объявлена переменная defaultSettings.
Значение переменной defaultSettings это объект.
Объявлена переменная overrideSettings.
Значение переменной overrideSettings это объект.
Объявлена переменная finalSettings.
Значение переменной finalSettings это объект.
Значение свойства finalSettings.theme равно 'light'.
Значение свойства finalSettings.public равно 'false'.
Значение свойства finalSettings.withPassword равно 'true'.
Значение свойства finalSettings.minNumberOfQuestions равно 10.
Значение свойства finalSettings.timePerQuestion равно 30.
При присваивании значения переменной finalSettings используется синтаксис ....*/

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
/*const finalSettings = {};*/
const finalSettings = { ...defaultSettings, ...overrideSettings };


/*-------30----------*/

// Задача. Карточки задач
// Задание
/*Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.*/

/*Тесты
Объявлена функция makeTask(data).
Вызов makeTask({}) возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
Вызов makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }) возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
Вызов makeTask({ category: 'Финансы', text: 'Забрать проценты' }) возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
Вызов makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }) возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
Вызов makeTask({ text: 'Купить хлеб' }) возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.*/

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  return {
      category: category,
      priority: priority,
      ...data,
      completed: completed,
    };
  // Пиши код выше этой строки
}

/*--------31-----------*/

/*Операция rest для сбора всех аргументов функции
Операция ... (rest) позволяет собрать группу независимых элементов в новую коллекцию. Синтаксически это близнец операции распыления, но отличить их просто - распыление это когда ... находится в правой части операции присваивания, а сбор это когда ... находится в её левой части.

Вернёмся к аналогии с яблоками. Если на полу лежат яблоки и у нас есть пустой ящик, то операция rest позволит «собрать» яблоки в ящик. При этом оригинальные яблоки останутся на полу, а в ящике будет копия каждого яблока.

Одна из областей применения операции rest это создание функций которые могут принимать произвольное количество аргументов.

// Как объявить параметры функции так,
// чтобы можно было передать любое кол-во аргументов?
function multiply() {
  // ...
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
Если убрать весь «синтаксический шум» и посмотреть на аргументы и параметры функции, то аргументы находятся в правой части операции присваивания, а параметры в левой, потому что значения аргументов присваиваются объявленным параметрам. Значит можно «собрать» все аргументы функции в один параметр используя операцию rest.

function multiply(...args) {
  console.log(args); // массив всех аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
Имя параметра может быть произвольным. Чаще всего его называют args, restArgs или otherArgs, сокращённое от arguments.*/

// Задание
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

/*Тесты
Объявлена функция add.
Функция add использует параметр args.
Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest).
Вызов add(15, 27) возвращает 42.
Вызов add(12, 4, 11, 48) возвращает 75.
Вызов add(32, 6, 13, 19, 8) возвращает 78.
Вызов add(74, 11, 62, 46, 12, 36) возвращает 241.*/

// Пиши код ниже этой строки
// function add() {

function add(...args) {
  let total = 0;
    for (const arg of args) {
       total += arg;
    }
    return total;
  // Пиши код выше этой строки
}

/*-------32--------*/

/*Операция rest для сбора части аргументов функции
Операция ... (rest) также позволяет собрать в массив только ту часть аргументов, которая необходима, объявив параметры до «сбора».

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значение первого аргумента
  console.log(secondNumber); // Значение второго аргумента
  console.log(otherArgs); // Массив остальных аргументов
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
Все аргументы, для которых будут объявлены параметры, передадут им свои значения, остальные аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.*/

// Задание
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.

/*Тесты
Объявлена функция addOverNum().
Вызов addOverNum(50, 15, 27) возвращает 0.
Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71.
Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51.
Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218.*/

// Пиши код ниже этой строки
/*function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;*/
function addOverNum(firstNum, ...args) {
    let total = 0;
    for (const arg of args) {
      if (arg > firstNum) {
        total += arg;
      }
    }
    return total;
  // Пиши код выше этой строки
}

/*-------33-------*/

// Задача. Массив совпадений
// Задание

/*Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.*/

/*Тесты
Объявлена функция findMatches().
Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2].
Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2].
Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41].
Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает[].*/

// Пиши код ниже этой строки

/*function findMatches() {
  const matches = []; // Не изменяй эту строку*/
function findMatches(data, ...arr) {
    const matches = []; // Не изменяй эту строку
    for (const keyArr of arr) {
      for (const keyData of data) {
        if (keyData === keyArr) {
          matches.push(keyData);
        }
      }
    }

  // Пиши код выше этой строки
  return matches;
}

/*-------34----------*/

/*Методы объекта
До сих пор мы рассматривали объекты только как хранилища взаимосвязанных данных, например информация о книге и т. п. Объекты-хранилища обычно находятся в массиве таких же объектов, который представляет коллекцию однотипных элементов.

Объекты могут хранить не только данные, но и функции для работы с этими данными - методы. Если значение свойства это функция, такое свойство называется методом объекта.

// ✅ Логиески и синтаксически сгруппированные сущности
const bookShelf = {
  books: ['Последнее королевство', 'Страж снов'],
  // Это метод объекта
  getBooks() {
    console.log('Этот метод будет возвращать все книги - свойство books');
  },
  // Это метод объекта
  addBook(bookName) {
    console.log('Этот метод будет добавлять новую книгу в свойство books');
  },
};

// Вызовы методов
bookShelf.getBooks();
bookShelf.addBook('Новая книга');
Такие объекты можно назвать «моделями». Они связывают данные и методы для работы с этими данными. Например, можно было объявить переменную books и две функции getBooks() и addBook(bookName), но тогда это были бы три независимые сущности без явной синтаксической, и со слабой логической связями.

// ❌ Слабосвязанные, независмые сущности
const books = [];
function getBooks() {}
function addBook() {}*/

// Задание
/*Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.

Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.*/

/*Тесты
Объявлена переменная bookShelf.

Значение переменной bookShelf это объект.

Значение свойства bookShelf.getBooks это метод объекта.

Вызов метода bookShelf.getBooks() возвращает строку 'Возвращаем все книги'.

Значение свойства bookShelf.addBook это метод объекта.

Вызов метода bookShelf.addBook('Мгла') возвращает строку 'Добавляем книгу Мгла'.

Значение свойства bookShelf.removeBook это метод объекта.

Вызов метода bookShelf.removeBook('Красный закат') возвращает строку 'Удаляем книгу Красный закат'.

Значение свойства bookShelf.updateBook это метод объекта.

Вызов метода bookShelf.updateBook('Пески Дюны', 'Дюна') возвращает строку 'Обновляем книгу Пески Дюны на Дюна'.*/


const bookShelf = {
  // Пиши код ниже этой строки
  /*books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },*/
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  	updateBook(oldName, newName) {
  return `Обновляем книгу ${oldName} на ${newName}`}
  // Пиши код выше этой строки
};

/*-------35--------*/


/*Доступ к свойствам объекта в его методах
Методы используются для работы со свойствами объекта, их изменения. Для доступа к объекту в методе используется не имя переменной, например bookShelf, а ключевое слово this - контекст. Значением this будет объект перед «точкой», то есть объект который вызвал этот метод, в нашем случае это ссылка на объект bookShelf.

const bookShelf = {
  books: ['Последнее королевство'],
  getBooks() {
    console.log(this);
  },
};

// Перед точкой стоит объект bookShelf,
// поэтому при вызове метода, this будет хранить ссылку на него.
bookShelf.getBooks(); // {books: ['Последнее королевство'], getBooks: f}
Для того, чтобы получить доступ к свойствам объекта в методах, мы обращаемся к нему через this и дальше как обычно - «через точку» к свойствам.

const bookShelf = {
  books: ['Последнее королевство'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // []
bookShelf.addBook('Мгла');
bookShelf.addBook('Страж снов');
console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Мгла', 'Страж снов']
bookShelf.removeBook('Мгла');
console.log(bookShelf.getBooks()); // ['Последнее королевство', 'Страж снов']
Будет логично задуматься - почему бы не использовать при обращении к свойствам имя объекта, ведь мы явно не собираемся его менять. Дело в том, что имя объекта штука не надежная, методы одного объекта можно копировать в другой (с другим именем), а в будущем узнаем, что часто, при создании объекта мы заранее вовсе не знаем имени. Использование this гарантирует, что метод работает именно с тем объектом, который его вызвал.*/

// Задание
/*Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.*/

/*Тесты
Объявлена переменная bookShelf.

Значение переменной bookShelf это объект.

Значение свойства bookShelf.updateBook это метод объекта.

После вызова метода bookShelf.updateBook('Мгла', 'Хроники подземелий'), значение свойства books это массив ['Последнее королевство', 'Хроники подземелий', 'Страж снов'].

После вызова метода bookShelf.updateBook('Последнее королевство', 'Дюна'), значение свойства books это массив ['Дюна', 'Мгла', 'Страж снов'].*/

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	  const key = this.books.indexOf(oldName);
      if (key >= 0) {
        this.books.splice(key, 1, newName);
      }
      return this.books;
	
	
    // Пиши код выше этой строки
  },
};


/*---------36--------*/

/*Задача. Лавка зелий «У старой жабы»

// Задание
К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.*/

/*Тесты
Объявлена переменная atTheOldToad.
Значение переменной atTheOldToad это объект.
Значение свойства atTheOldToad.potions это массив [].*/

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: []
  // Пиши код выше этой строки
};


/*--------37----------*/

// Задание
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

/*Тесты
Объявлена переменная atTheOldToad.
Значение переменной atTheOldToad это объект.
Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
Значение свойства atTheOldToad.getPotions это метод объекта.
Вызов метода atTheOldToad.getPotions() возвращает ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].*/

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions (){
    return atTheOldToad.potions
  // return this.potions;
  },
  // Пиши код выше этой строки
};


/*-----------38---------*/

// Задание
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

/*Тесты
Объявлена переменная atTheOldToad.

Значение переменной atTheOldToad это объект.

Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].

Значение свойства atTheOldToad.addPotion это метод объекта.

После первого вызова метода atTheOldToad.addPotion('Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка'].

После второго вызова метода atTheOldToad.addPotion('Зелье силы'), в свойстве potions будет массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа', 'Невидимка', 'Зелье силы'].*/

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName);
      return this.potions;
       // Пиши код выше этой строки
  },
};

/*---------39---------*/

// Задание
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

/*Тесты
Объявлена переменная atTheOldToad.
Значение переменной atTheOldToad это объект.
Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
Значение свойства atTheOldToad.removePotion это метод объекта.
После первого вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив ['Зелье скорости', 'Каменная кожа'].
После вотрого вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив ['Каменная кожа'].*/

const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
   const key = this.potions.indexOf(potionName);
      this.potions.splice(key, 1);
      return this.potions;
    // Пиши код выше этой строки
  },
};



/*----------40----------*/

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

/*Тесты
Объявлена переменная atTheOldToad.
Значение переменной atTheOldToad это объект.
Значение свойства atTheOldToad.potions это массив ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'].
Значение свойства atTheOldToad.updatePotionName это метод объекта.
После первого вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
После второго вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'), в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Невидимка'].*/

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
 const key = this.potions.indexOf(oldName);
      this.potions.splice(key, 1, newName);
      return this.potions;
    // Пиши код выше этой строки
  },
};


/*---------41-----------*/

// Задание
/*Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

{
  name: 'Дыхание дракона',
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
  updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName на newName в массиве potions.* /

/*Тесты
Объявлена переменная atTheOldToad.
Значение переменной atTheOldToad это объект.
Значение свойства atTheOldToad.getPotions это метод объекта.
Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Значение свойства atTheOldToad.addPotion это метод объекта.
Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.
Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
Значение свойства atTheOldToad.removePotion это метод объекта.
Для исходного объекта после вызова метода atTheOldToad.removePotion('Дыхание дракона'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
Для исходного объекта после вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Значение свойства atTheOldToad.updatePotionName это метод объекта.
Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
Для исходного объекта после вызова метода atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ].*/

/*
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};
*/
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      for (key of Object.keys(this.potions)) {
        if (this.potions[key].name.includes(potionName.name)) {
          return `Зелье ${potionName.name} уже есть в инвентаре!`;
        }
      }
      this.potions.push(potionName);
      return `Зелье ${potionName.name} успешно добавлено!`;
      //return this.potions;
    },
    removePotion(potionName) {
      for (key of Object.keys(this.potions)) {
        if (this.potions[key].name.includes(potionName)) {
          this.potions.splice(key, 1);
          return `Зелье ${potionName} удалено!`;
        }
      }
      return `Зелья ${potionName} нет в инвентаре!`;
    },
    updatePotionName(oldName, newName) {
      for (key of Object.keys(this.potions)) {
        if (this.potions[key].name.includes(oldName)) {
          this.potions[key].name = newName;
          return `Название зелья ${oldName} заменено на ${newName}!`;
        }
      }
      return `Зелья ${oldName} нет в инвентаре!`;
    },
  // Пиши код выше этой строки
};
