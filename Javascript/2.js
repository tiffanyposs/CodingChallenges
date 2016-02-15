var findFibonacci = function(max){
	var sequence = [1, 2];
	while(true){
		var sum = sequence[sequence.length - 2] + sequence[sequence.length - 1];
		if(sum < max){
			sequence.push(sum);
		}else{
			break
		}
	}
	return sequence
}

var findEvenSum = function(nums){
	var total = 0;
	nums.forEach(function(num){
		if(num % 2 === 0){
			total+=num
		}
	});
	return total
}

findEvenSum(findFibonacci(4000000))
