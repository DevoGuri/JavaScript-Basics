/*
	Functions and Expressions
*/

// we simply define a function using the 'function' keyword

// check the age of the user

var yourAge = function(year) {
	if (year) {
		return 2020 - year + ' years old';

		return 'error';
	}
}

console.log(yourAge(prompt('Enter your birth year')));
