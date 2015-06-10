// create a function to determine the fibonacci sequence

var evenFib = function(maxFib) {
	// set up variables
	var prevFib = 1; // the first number is 1, so that will be our starting previous point
	var currentFib = 2; // the second number is 2, so we will call that current
	var nextFib; // we will find it by adding the previous 2 numbers
	var sum = 2; // the starting sum will be 2, since 1 is odd
	while (prevFib + currentFib < 4000000) { // sets our largest maxFib to 4million
		nextFib = prevFib + currentFib;
		if (nextFib % 2 === 0) {
			sum += nextFib;
		}
		// move the sequence along by redefining previous and current numbers
		prevFib = currentFib;
		currentFib = nextFib;
	}
	return sum; // gives us the answer we're looking for
};
		
console.log(evenFib(4000000)); // sum = 4613732