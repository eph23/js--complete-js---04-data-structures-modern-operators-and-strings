'use strict';

// Enhanced object literal
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Destructuring from Function Returns
  // Enhanced object literal
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Enhanced object literal
  openingHours,

  // Destructure in Function Parameters
  // Enhanced object literal
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! You ordered ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, Order will be delivered on ${time} at ${address}`
    );
  },
  // Spread Operator in Functions
  // Enhanced object literal
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  // Rest in Functions
  // Enhanced object literal
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);

// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // const openClose = open ? `open at ${open}` : 'are closed';
  const open = restaurant.openingHours[day]?.open ?? 'are closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1)) ?? 'Method dose not exists';
console.log(restaurant.orderRisotto?.(0, 1)) ?? 'Method dose not exists';

// Arrays
const users = [{ name: 'Ephraim', email: 'hello@eph.io' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User array empty');
