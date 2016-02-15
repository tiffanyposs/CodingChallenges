var OneThroughTwenty = function(num){
	var counter = 0;
	for(var i = 1; i < 20; i++){
		if(num % i === 0){
			counter++;
		}else{
			num++
			counter = 0;
			i = 1
		}
		if(counter === 20){
			return num
		}
		
	} 
}

OneThroughTwenty(20)