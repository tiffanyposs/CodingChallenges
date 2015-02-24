//finds if a number is prime or not
var IsPrime = function(number){
	var counter = 2;
	var prime = true
	while(counter < number){
		var remainder = number % counter;
		if(remainder === 0){
			prime = false
		}
		counter++;
	}
	if(prime === true){
		return true
	}
	else{
		return false
	}

}


var FindNumber = function(){
	var prime_counter = 1;
	var counter = 2
	while(prime_counter < 10001){
		var answer = IsPrime(counter);
		if(answer === true){
			console.log( prime_counter + " " + counter)
			prime_counter++;
			counter++;
		}
		else{
			counter++;
		}
	}
	console.log(counter + " is the " + prime_counter + "th prime number")
}


FindNumber();