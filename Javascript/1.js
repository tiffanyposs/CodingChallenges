var multipleThreeFive = function(num){
	if(num % 3 == 0 || num % 5 == 0){
		return true
	}
	return false
}

var sumOfFactor = function(upTil){
	var total = 0;
	for(var i = 1; i < upTil; i++){
		if(multipleThreeFive(i)){
			total+=i;
		}
	}
	return total
}

sumOfFactor(1000)