// Variables

/*
* Variable names can't start with anything other than:
*    - dollar sign ($)
*    - underscores (_)
*    - alphabets(a-z, A-Z)
*/


// Data types

/*
*In JavaScript, There are five different data types:
*	- Numbers : Floating point numbers, for decimals and integer
*	- String : Sequence of characters, user for text
*	- Boolean : Logical data type that can only be true or false
*	- Undefined : Data type of a variable that does not have a value yet
*	- Null : Also means 'non-existent'
*/



var fullName = 'Gurpreet Singh'; //String
var userAge = 21; //Number
var fullAge = true //Boolean
var undef; // undefined or Null


// Printing variables to console and type Coercion it (changing their type to string using + sign)

console.log('Full Name : ' + fullName + '\nuserAge : ' + userAge);
console.log('Full Age : ' + fullAge + '\nundef : ' + undef);

// let's try to change Values and data type of variables

undef = 'hello'; //type: string
console.log('undef (before changing data type) ' + undef);

undef = '20'; //type: number
console.log('undef (after changing data type) ' + undef);


// asking user to enter some Values

var myName = prompt('What is Your Name');
console.log('Hello ' + myName);