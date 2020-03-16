/* 
*	Operators
*/

/*
*	Arithematic Operators
*/

var firstNumber = 30;
var secoundNumber = 15;

console.log('\nArithematic Operators\n\n'); // Separate and add some spacing

console.log('30 + 15: ', + firstNumber + secoundNumber); //Addition
console.log('30 - 15: ', + firstNumber - secoundNumber); //Subtraction
console.log('30 * 15: ', + firstNumber * secoundNumber); //Multiplication
console.log('30 / 15: ', + firstNumber / secoundNumber); //Division
console.log('30 % 15: ', + firstNumber % secoundNumber); //Modulus

/*
*	Logical Operators
*/

console.log('\nLogical Operators\n\n'); // Separate and add some spacing

console.log('30 > 15', firstNumber > secoundNumber); //Check firstNumber is Grater than secoundNumber?
console.log('30 < 15', firstNumber < secoundNumber); //Check secoundNumber is Grater than firstNumber?
console.log('30 == 15', firstNumber == secoundNumber); //Check firstNumber is equal to secoundNumber?
console.log('30 != 15', firstNumber != secoundNumber); //Check firstNumber is equal to secoundNumber or not?

/*
*	typeof Operator
*/

console.log('\ntypeof Operator\n\n'); // Separate and add some spacing

console.log('typeof firstNumber: ' + typeof firstNumber);
console.log('typeof "Hello": ' + typeof "Hello");