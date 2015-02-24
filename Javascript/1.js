var num_array = [];

var number = 1;

while(number <= 100){
	if(number % 3 === 0 || number % 5 === 0){
		num_array.push(number);	
	}
	number++;
}

var total = 0;

num_array.forEach(function(each){
	total += each;
	console.log(total)
})