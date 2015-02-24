var isPrime = function(num){
	var counter = 2;
	var prime = true;
	while(counter < num){
		var result = num / counter;
		if(result % 1 === 0){
			prime = false;
		}
		counter++;
	}
	return prime;
}


var totalPrime = function(){
	var i = 2;
	var sum = 0
	while(i < 100){
		var prime = isPrime(i)
			if(prime === true){
				console.log(i)
				sum+=i;
			}
		i++;
	}
	return sum
}

console.log(totalPrime())