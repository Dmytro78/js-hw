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


/*-------20---------*/


/*-------21---------*/


/*-------22---------*/


/*-------23---------*/


/*-------24---------*/


/*-------25---------*/


/*-------26---------*/


/*-------27---------*/


/*-------28---------*/


/*-------29---------*/


/*-------30---------*/


/*-------31---------*/


/*-------32---------*/


/*-------33---------*/


/*-------34---------*/


/*-------35---------*/


/*-------36---------*/


/*-------37---------*/