var OneThroughTwenty = function(){
	var final_number = 0
	var number = 1;
	while(final_number === 0){
		var divisible = true;
		
		for(var i = 20; i >= 1; i--){
			if(number % i != 0){
				divisible = false;
				break;
			}
		}
		if(divisible === true){
		for(var x = 20; x >= 1; x--){
			var answer = number/x;
			console.log(number + " / " + x + " = " + answer)
		}
			final_number = number;
			console.log("answer " + number);
			return number;
		}
		number++;
	}
}

console.log(OneThroughTwenty());