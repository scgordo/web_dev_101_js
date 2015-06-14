/* 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? 
*/

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return true;
}

var myNumber = 600851475143;
var primeFactors = [];

for (var i = 0; i <= 1000; i++) {
	if (600851475143 % i === 0 && isPrime(i) === true) {
		primeFactors.push(i);
	}
}

var biggestPrimeFactor = primeFactors[primeFactors.length - 1];

console.log(biggestPrimeFactor);