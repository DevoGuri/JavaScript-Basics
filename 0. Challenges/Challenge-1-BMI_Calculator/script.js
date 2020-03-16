// Challenge 1

//Heights in Meters
var johnHeight = 1.6;
var markHeight = 2.1;

// Weight in Kg
var johnWeight = 75;
var markWeight = 80;

/* 
*	Calculate the BMI using the formula
*	BMI = weight/(height*height) 
*/

var johnBMI = johnWeight / (johnHeight * johnHeight);
var markBMI = markWeight / (markHeight * markHeight);

console.log('John\'s BMI: ' + johnBMI);
console.log('Mark\'s BMI: ' + markBMI);

if (johnBMI > markBMI) {
	console.log('john\'s BMI is Grater than Mark\'s BMI');
}
else {
	console.log('Mark\'s BMI is Grater than john\'s BMI');
}