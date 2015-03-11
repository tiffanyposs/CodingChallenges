var abundentNumber = function(number){
	var sum = 0;
	var x = 1;
	while(x < number){
		var product = number / x;
		if(product % 1 === 0){
			sum += x
		}
		x++;
	}
	if(sum > number){
		return true
	}
	else{
		return false
	}
}



var sumAbundent = function(max_num){
	var total = 0
	var x = 13;
	while(x < max_num){
		var y = 1;
		var sum_abundent = false;
		while(y < x){
			var z = x - y;
			var z_abundent = abundentNumber(z)
			var y_abundent = abundentNumber(y)
			if(z_abundent === true && y_abundent === true){
				// console.log(z + "+" + y + "=" + x)
				sum_abundent = true;				
			}

			y++;
		}
		if(sum_abundent === false){
			total += x;
		}
		x++
	}
	console.log(total)
}

sumAbundent(28123)



