/*
*	Conditional Logic
*/

var userName = prompt('What is your name');
var civilStatus = prompt('Are you married or single?');

// Applying Conditional Logic

if (civilStatus === 'married') {
	console.log(userName + ' is' + civilStatus);
}
else if(civilStatus === 'single') {
	console.log(userName + ' is ' + civilStatus)
}
else {
	console.log('Error.')
}