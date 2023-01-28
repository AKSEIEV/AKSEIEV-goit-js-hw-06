const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredienItem = document.createElement("li");
ingredienItem.textContent = ingredients['0'];
ingredienItem.classList.add('item');
console.log(ingredienItem);

const ingredienItem2 = document.createElement("li");
ingredienItem2.textContent = ingredients['1'];
ingredienItem2.classList.add('item');
console.log(ingredienItem2); 

const ingredienItem3 = document.createElement("li");
ingredienItem3.textContent = ingredients['2'];
ingredienItem3.classList.add('item');
console.log(ingredienItem3); 

const ingredienItem4 = document.createElement("li");
ingredienItem4.textContent = ingredients['3'];
ingredienItem4.classList.add('item');
console.log(ingredienItem4); 

const ingredienItem5 = document.createElement("li");
ingredienItem5.textContent = ingredients['4'];
ingredienItem5.classList.add('item');
console.log(ingredienItem5); 

const ingredienItem6 = document.createElement("li");
ingredienItem6.textContent = ingredients['5'];
ingredienItem6.classList.add('item');
console.log(ingredienItem6); 


const ul = document.querySelector('ul#ingredients');
console.log(ul);

const power = ul.after(ingredienItem, ingredienItem2, ingredienItem3, ingredienItem4, ingredienItem5, ingredienItem6);

ul.appendChild(ingredienItem) // як БЛЯТЬ ВСІ ДОБАВИТИ СЮДА сукааааааааааааааа



//  Напиши скрипт, який для кожного елемента масиву ingredients:

//  Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//  Додасть назву інгредієнта як його текстовий вміст.
//  Додасть елементу клас item.
//  Після чого, вставить усі <li> за одну операцію у список ul#ingredients.