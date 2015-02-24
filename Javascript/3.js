var number = 600851;
var x = 1;
var array = []

//checks for whole  numbers when divided
while(x < number && array.indexOf(x) === -1){
	var y = number / x;
	if(y % 1 === 0){
		array.push(x, y);
	} 
	x++;
}


var prime_array = []

//make an array of prime numbers
array.forEach(function(each){
	var num = 3;
	var divide_array = [];
	while(num < each){
	var total = each / num;
		if(total % 1 === 0){
			divide_array.push(num)
		}
	num++;
	}
	if(divide_array.length === 0){
		prime_array.push(each);
	}
})

var high_prime = 1
//finds the highest number
for(i = 0, j = 1; j < prime_array.length; i++, j++){
	if(prime_array[i] > prime_array[j] && prime_array[i] > high_prime){
		high_prime = prime_array[i];
	}
	if(prime_array[j] > prime_array[i] && prime_array[j] > high_prime){
		high_prime = prime_array[j];
	}
}

console.log(high_prime)

