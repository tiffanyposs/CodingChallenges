var isPrime = function(num){
	for(var i = 2; i < num - 1; i++){
		if(num % i == 0){
			return false
		}
	}
	return true
}

var findPrimeAtIndex = function(num){
	var index = 0,
		counter = 2,
	    highest;
	while(index <= num){
		if(isPrime(counter)){
			highest = counter;
			index++;
		}
		counter++;
		if(index === num){
			return highest
		}
	}
}

findPrimeAtIndex(5)


