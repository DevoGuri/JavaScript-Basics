/*
*	Arrays is always started for 0 index
*/

// initialize new array
var names = ['John', 'Mark', 'Jane'];
// Another way of creating arrays
var years = new Array(1999, 2001, 2000);

console.log(names); // Print the whole array to the console
console.log(names[0]); // Print the first element to the console

// mutate array data

// Add an item in beginning of the array
names.unshift('Mary'); 

// Assign new value to an index
names[2] = 'Smith';

// Another way to add an item in end of the array
names[names.length] = 'John';

console.log(names); //after assigning values


// array with deferent data type
var johnInfo = ['John', 'Smith', 1994, 'Teacher' ]

console.log(johnInfo);

// modification of array

// Add an item to the end of the array
johnInfo.push('Single');

// Remove an item from the end of the array
johnInfo.pop();

// Remove an item from the beginning of the array
johnInfo.shift();

//After assigning a Values
console.log(johnInfo);

// returns the index of an item in the array
console.log(names.indexOf('John'));
// Returns negative index if item is not present in the array
console.log(names.indexOf('Gurpreet'));