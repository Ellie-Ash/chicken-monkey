/* chicken monkey */
console.log(chickenmonkey.js);

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) {
        console.log("chicken", currentNumber);
    }
}

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 7 === 0) {
        console.log("monkey", currentNumber);
    }
}


/* battle of the bands */
let bandNumber = 1

const takeNumber = function increment(bandNumber) {
    bandNumber++;
    return bandNumber;
}


const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


/* cookout */
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

/* Stacking Words */

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

/* task: iterate over array "foods" */
/* invoke function */
/* cookedFood array should contain all items that have been cooked */


foods.forEach(function(cookedFood) { 
    console.log(cookedFood);
} );

