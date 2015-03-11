var amicablePair = function(num){
	var sum_a  = 0;
	var a = num - 1;
	while(a >= 1){
		var product_a = num / a;
		if(product_a % 1 === 0){
			sum_a += a;
		}
		a--;
	}
	var sum_b = 0;
	var b = sum_a - 1;
	while(b >= 1){
		var product_b = sum_a / b;
		if(product_b % 1 === 0){
			sum_b += b;
		}
		b--;
	}

	if(num === sum_b){
		return true
	}
	else{
		return false
	}
}

var someNumbers = function(number){
	var x = 1;
	var amicable_array = []
		while(x <= number){
		var amicable = amicablePair(x);
			if(amicable === true){
				amicable_array.push(x)
			}
		x++
		}
	var total = 0;
	amicable_array.forEach(function(each){
		total += each;
	})
	console.log(total);
	return total
}

someNumbers(10000)