/*
	Coding Challenge 3 | Tip Calculator
*/

function tipCalculator(bill) {
	var percentages;
	if (bill < 50) {
		percentages = .2; //tip 20% of the bill when the bill is less than $50
	}
	else if (bill >= 50 && bill <200) {
		percentages = .15; //tip 15% of the bill when the bill is Between $50 and $200
	}
	else {
		percentages = .1; //tip 10% of the bill when the bill is more than $200
	}
	return percentages * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];


/*
	- calculate all three final paid amount (bill + tip)
*/
var finalValue = [bills[0] + tips[0],
					bills[1] + tips[2],
					bills[2] + tips[2]];


// final values after adding (bills + tips)
console.log(finalValue);