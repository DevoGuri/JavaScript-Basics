// Challenge-2

// Check the Winner them in Basketball matches

/* 
	* in latest 3 matches :

	- John's team score 89 , 120 , 103 Points
	- Mark's team score 116 , 94 , 123 Points
	- Mary's team score 97 , 134 , 105 Points

*/

// Calculate the average score for each team

var johnAvg = (89 + 120 + 103) / 3;
var markAvg = (116 + 94 + 123) / 3;
var maryAvg = (97 + 134 + 105) / 3;

// take a winner decision using && (and) Operator

if (johnAvg > markAvg && johnAvg > maryAvg) {
	console.log('John\'s team WIN\'s the match with : ' + johnAvg + ' Scores');
}
else if (markAvg > johnAvg && markAvg > maryAvg) {
	console.log('Mark\'s team WIN\'s the match with : ' + markAvg + ' Scores');
}
else if (maryAvg > johnAvg && maryAvg > markAvg) {
	console.log('Mary\'s team WIN\'s the match with : ' + maryAvg + ' Scores');
}
else {
	console.log('The match war Draw');
}