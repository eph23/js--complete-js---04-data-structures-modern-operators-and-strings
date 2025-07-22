'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Destructuring from Function Returns
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant);

// Destructuring arrays
const arr = [2, 3, 4];

const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

const [first, second] = restaurant.categories;
console.log(first);
console.log(second);

// Skipping a value
const [primary, , secondary] = restaurant.categories;
console.log(primary, secondary);

// Swapping Variables
let [main, sub] = restaurant.categories;
[main, sub] = [sub, main];
console.log(main, sub);

// Destructuring from Function Returns
console.log(restaurant.order(2, 0));
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested arrays
const nested = [2, 4, [5, 6]];
const [x, , z] = nested;
console.log(x, z);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default value
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
