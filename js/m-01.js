/*-------1---------*/
const productName = 'Droid';
const pricePerItem = 2000;

/*-------2---------*/
// Start code
let productName = 'Droid';
let pricePerItem = 2000;

// Write your code under this line
pricePerItem=3500;
productName='Repair droid'

/*-------3---------*/
const topSpeed=160;
const distance=617.54;
const login='mango935';
const isOnline=true;
const isAdmin = false;

/*-------4---------*/
// Базовый код
const pricePerItem = 3500;
const orderedQuantity = 4;

// Пиши код ниже этой строки
const totalPrice = (pricePerItem*orderedQuantity);

/*-------5---------*/
// Базовый код
const productName = 'Дроид';
const pricePerItem = 3500;

// Пиши код ниже этой строки
const message=`Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

/*-------6---------*/
const pricePerDroid=800;
const orderedQuantity=6;
const deliveryFee=50;
const totalPrice=(pricePerDroid*orderedQuantity+deliveryFee);
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//точки должны быть на англ. раскладке

/*-------7---------*/
// Пиши код ниже этой строки
function sayHi() {
  console.log('Привет, это моя первая функция!');}
sayHi();

/*-------8---------*/
// Пиши код ниже этой строки
function add(a,b,c) {
  console.log(`Результат сложения равен ${a+b+c}`);
  // Пиши код выше этой строки
}
  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

/*-------9---------*/

/*function multiply(x, y, z) {
  console.log('Код до return выполняется как обычно');

  // Возвращаем результат выражения умножения
  return x * y * z;

  console.log('Этот лог никогда не выполнится, он стоит после return');
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550*/

function add(a, b, c) {
  //  Пиши код ниже этой строки
return a+b+c;
    
//  Пиши код выше этой строки
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10)); //52
console.log(add(10, 20, 30)); //60
console.log(add(5, 10, 15)); //30

/*-------10---------*/
function makeMessage (name, price) {
  // Пиши код ниже этой строки

   const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
  
  // Пиши код выше этой строки
  return message;
};
/*-------11---------*/
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Пиши код ниже этой строки
  const totalPrice = (orderedQuantity * pricePerItem);

  // Пиши код выше этой строки
  return totalPrice;
};

/*-------12---------*/
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код ниже этой строки
  const orderPrice = (orderedQuantity * pricePerDroid + deliveryFee);
  
  const message = (`Вы заказали дроидов на сумму ${orderPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`);

  // Пиши код выше этой строки
  return message;
}

/*-------13---------*/
/*const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false*/

function isAdult(age) {
  // Пиши код ниже этой строки
  const passed = (age >=18);

  // Пиши код выше этой строки
  return passed;
}

/*-------14---------*/

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  const isMatch = (password === SAVED_PASSWORD);

  // Пиши код выше этой строки
  return isMatch;
}
/*-------15---------*/
function checkAge(age) {
  let message;

  if (age >= 18) { // Дополни эту строку
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }

  return message;
}

/*-------16---------*/

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (ordered > available) {
	message = ('На складе недостаточно товаров!');
} else {
  message = ('Заказ оформлен, с вами свяжется менеджер');
}  
  
  // Пиши код выше этой строки
  return message;
}

/*-------17---------*/

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Пиши код ниже этой строки
a += 2;
b -= 4;
c *= 3;
d /= 10;
/*-------18---------*/

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
 const totalPrice=(pricePerDroid * orderedQuantity);
 const balanceCredits=(customerCredits - totalPrice);
  if (totalPrice > customerCredits) {
    message = ('Недостаточно средств на счету!');
  } else {
    message = (`Вы купили ${orderedQuantity} дроидов, на счету осталось ${balanceCredits} кредитов`);
  }
  
  // Пиши код выше этой строки
  return message;
}

/*-------19---------*/
/*let cost;
const subscription = 'premium';

if (subscription === 'free') {
  cost = 0;
} else if (subscription === 'pro') {
  cost = 100;
} else if (subscription === 'premium') {
  cost = 500;
} else {
  console.log(`Невалидный тип подписки ${subscription}`);
}

console.log(cost); // 500*/

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password===null) { // Дополни эту строку
    message =  'Отменено пользователем!';
  } else if (password===ADMIN_PASSWORD) { // Дополни эту строку
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}

/*-------20---------*/
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
if (ordered===0) {
message = ('В заказе еще нет товаров');
} else if (ordered > available) {
  message = ('Слишком большой заказ, на складе недостаточно товаров!');
} else {
  message = ( 'Заказ оформлен, с вами свяжется менеджер');
}
  
  // Пиши код выше этой строки
  return message;
}

/*-------21---------*/
/*console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3*/

/*шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.
console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log('' && 'Манго'); // false && true -> ''
console.log('Манго' && ''); // true && false -> ''
console.log('Манго' && 'Поли'); // true && true -> 'Поли'
console.log('Поли' && 'Манго'); // true && true -> 'Манго'*/

function isNumberInRange(start, end, number) {
  const isInRange = (number >= start && number <= end); // дополни эту строку

  return isInRange;
}

/*-------22---------*/
/*console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true*/

function checkIfCanAccessContent(subType) {
  const canAccessContent = (subType === 'pro' || subType === 'vip'); // дополни эту строку

  return canAccessContent;
}

/*-------23---------*/
/*console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!'Манго'); // !'Манго' -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!''); // !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false*/

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = (!isInRange); // Дополни эту строку

  return isNotInRange;
}

/*-------24---------*/

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
if (totalSpent >= 50000) {
  discount = (GOLD_DISCOUNT);
} else if (totalSpent >= 20000 && totalSpent < 50000) {
discount = (SILVER_DISCOUNT);
} else if (totalSpent >= 5000 && totalSpent < 20000) {
discount = (BRONZE_DISCOUNT);
} else {
discount = (BASE_DISCOUNT)
}
  // Пиши код выше этой строки
  return discount;
}
/*-------25---------*/
/*let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // 'adult'

Выполним рефакторинг, заменив if...else тернарным оператором.

const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); // 'adult'*/

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  message = ordered>available?'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';
  

  // Пиши код выше этой строки
  return message;
}

/*-------26---------*/

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Пиши код ниже этой строки
 message = (password === ADMIN_PASSWORD)?'Доступ разрешен':'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
  return message;
}
/*-------27---------*/
/*switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;*/

/*нельзя сравнить на больше или меньше, только на равенство.*/

function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

 switch (type) { // Дополни эту строку
    case 'starter' :// Дополни эту строку
      price = 0; // Дополни эту строку
      break;

   case 'professional': // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case 'organization': // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}
/*-------28---------*/
/*switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;

  default:
    инструкции;}*/

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password){
    case null:
      message = 'Отменено пользователем!';
      break;
    case ADMIN_PASSWORD: 
      message = 'Добро пожаловать!';
      break;
    default:
      message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
}


/*-------29---------*/

function getShippingCost(country) {
  let message;
 
  // Пиши код ниже этой строки
switch (country) {
  case 'Китай':
    message = 'Доставка в Китай будет стоить 100 кредитов';
    break;
  case 'Чили':
    message = 'Доставка в Чили будет стоить 250 кредитов';
    break;
  case 'Австралия':
    message = 'Доставка в Австралия будет стоить 170 кредитов';
    break;
  case 'Ямайка':
    message = 'Доставка в Ямайка будет стоить 120 кредитов';
    break;
   default:
     message = 'Извините, в вашу страну доставки нет';
 
}
  // Пиши код выше этой строки
  return message;
}
/*-------30---------*/
/*const productName = 'Ремонтный дроид';

// Если в переменной хранится строка
console.log(productName.length); // 15

// Если строковый литерал
console.log('Ремонтный дроид'.length); // 15*/

function getNameLength(name) {
  const productName = (name.length);
  const message = `Длина вашего имени ${productName} символа(ов)`; // Дополни эту строку

  return message;
}


/*-------31---------*/
/*const productName = 'Ремонтный дроид';
console.log(productName[0]); // 'P'
console.log(productName[5]); // 'т'
console.log(productName[14]); // 'д'
console.log(productName[productName.length - 1]); // 'д'*/
const courseTopic = 'JavaSript для начинающих';
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length-1];

// Пиши код выше этой строки

/*-------32---------*/
/*Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки
const productName = 'Ремонтный дроид';
console.log(productName.slice(0, 4)); // 'Ремо'
console.log(productName.slice(3, 9)); // 'онтный'
console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
console.log(productName.slice(10, productName.length)); // 'дроид'*/

function getSubstring(string, length) {
  const substring = string.slice(string, length); // Дополни эту строку

  return substring;
}

/*-------33---------*/

/*Дополни код функции так, что если длина строки:
не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.*/

function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
if (message.length <= maxLength) {
	result= message;
} else {
	result= message.slice(message, maxLength)+'...';
}
// Пиши код выше этой строки
  return result;
}

/*-------34---------*/
/*Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть 
преобразовать все её символы в верхний или нижний регистр. 
Методы строки toUpperCase() и toLowerCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

const BRAND_NAME = 'SAMSUNG';
const userInput = 'saMsUng';
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true*/

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}


/*-------35---------*/
/*Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква 'a' не равна букве 'А'.

const productName = 'Ремонтный дроид';

console.log(productName.includes('н')); // true
console.log(productName.includes('Н')); // false
console.log(productName.includes('дроид')); // true
console.log(productName.includes('Дроид')); // false
console.log(productName.includes('Ремонтный')); // true
console.log(productName.includes('ремонтный')); // false*/

/*Присвой переменной result выражение проверки вхождения имени(параметр name), в полное имя(параметр fullname).
Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.*/

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Дополни эту строку
  return result;
}


/*-------36---------*/
/*Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещенных слов, функция возвращает буль false.*/

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 message = message.toLowerCase();
    result = message.includes("spam") || message.includes("sale");
  // Пиши код выше этой строки
  return result;
}

