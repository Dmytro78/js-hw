const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  const totalPrice = 0;
  
	for (const product of products) {
        if (productName === products.name) {
            totalPrice.push(products[price]*products[quantity]);
        }
        }
      
     return totalPrice;

  // Пиши код выше этой строки
}
