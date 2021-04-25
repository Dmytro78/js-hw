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




/*============11================*/

