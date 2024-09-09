const fruits = ["orange", "kiwi", "apple", "banana", "guava"];

// onsole.log(fruits);
// console.log(fruits[2]); // find an item through index
// console.log("Fruits length:", fruits.length); // find no. of items present in an array

// Array Methods
fruits.pop(); // remove an item from the last index
fruits.push("straberry"); // add an item from the last index of an array

fruits.shift(); // remove an item from the first index
fruits.unshift("lichi"); // add an item on the first index

// console.log(fruits);

// joining an array

let moreFruits = ["apple", "banana", "watermelon"];

// console.log(fruits.concat(moreFruits));

// slicing an array

let animals = ["tiger", "cat", "dog", "lion", "cow"];

console.log(animals);

// let slice = animals.slice(1, 4);
// console.log(slice);

//Splice(startIndex, delete Count, items you want to add)

let splice = animals.splice(1, 0, "bird", "wolf", "zebra", "yalk");

//alphabetically sort a-z
animals.sort();

// reverse an array
animals.reverse();
console.log(animals);
