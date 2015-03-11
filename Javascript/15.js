var sumCount = function(num){
	var product = 1;
	var x = num;
	while(x >= 1){
		product *= x;
		x--;
	}
	console.log(product)
}

sumCount(100)