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

// Set
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexiCanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Intersection
const commonFoods = italianFoods.intersection(mexiCanFoods);
console.log('Intersection', commonFoods);
console.log([...commonFoods]);

// Union
const italianMexicanFusion = italianFoods.union(mexiCanFoods);
console.log('Union', italianMexicanFusion);

// Difference
const uniqueItalianFoods = italianFoods.difference(mexiCanFoods);
console.log('Difference', uniqueItalianFoods);
const uniqueMexicanFoods = mexiCanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

// Symmetric Difference
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexiCanFoods);
console.log('Symmetric Difference', uniqueItalianAndMexicanFoods);

// Disjoint
console.log(italianFoods.isDisjointFrom(mexiCanFoods));
