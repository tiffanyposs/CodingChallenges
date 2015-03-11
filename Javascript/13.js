var sumPower = function(number){
	var counter = 1;
	var total = 1
	while(counter <= 15){
		var x = number;
		total*=x;
		counter++;
	}
	var array = total.toString().split("")
	var i = 0;
	var total_amount = 0;
	while(i < array.length){
		var add = parseInt(array[i]);
		total_amount+=add
		i++;
		console.log(total_amount)
	}
	// console.log
}

sumPower(2)