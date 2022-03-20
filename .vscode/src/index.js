console.log("HELLO");
// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);

//   for (const value of values) {
//     totalSalary += value;
//   }
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({ mango: 70, poly: 25, alfred: 73 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     //const potionIndex = this.potions.indexOf(potionName);
//     //this.potions.splice(potionIndex, 1);

//     for (const potion of this.potions) {
//       const keys = Object.keys(potion);
//       console.log(keys);
//       //for(let key of keys) {
//       //if(potion[key] === potionName) {
//       //return this.potions.splice(keys, 1);
//       //}
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSucces, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza === pizzaName) {
//         console.log(onSucces(pizzaName));
//       }
//       console.log(
//         onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//       );
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// // every поверне true тільки якщо всіх фруктів буде більше ніж 0 штук
// const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false
// console.log(allAvailable);
// // some поверне true якщо хоча б одного фрукта буде більше ніж 0 штук
// const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true
// console.log(anyAvailable);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
//console.log(getTotalBalanceByGender);
// const getSortedFriends = [...users]
//   .flatMap((user) => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort((firstFriend, secondFriend) => firstFriend.localeCompare(secondFriend));
// console.log(getSortedFriends);

// const getNamesSortedByFriendCount = [...users]
//   .sort(
//     (alfaFriend, deltaFriend) =>
//       alfaFriend.friends.length - deltaFriend.friends.length
//   )
//   .map((user) => user.name);
// console.log(getNamesSortedByFriendCount);

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// Пиши код ниже этой строки
// function composeMessage(position) {
//   return `'Готовим ${this.dish} для ${this.email} Ваш заказ ${
//     position + 1
//   }-й в очереди.'`;
// }
// const messages = [];
