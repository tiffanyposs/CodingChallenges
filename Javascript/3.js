var isPrime = function(num){
	for(var i = 2; i < num - 1; i++){
		if(num % i == 0){
			return false
		}
	}
	return true
}

var highestPrime = function(num){
	var highest;
	for(var i = 0; i <= num; i++){
		if(num % i === 0 && isPrime(i)){
			highest = i;
		}
	}
	return highest
}

console.log(highestPrime(13195))