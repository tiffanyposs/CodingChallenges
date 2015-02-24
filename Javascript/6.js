var findDifference = function(){
	var number = 1;
	var before = 0;
	var after = 0;
	while(number <= 100){
		before += (number*number);
		after += number;
		number++;
	}
	after = after*after;
	var sum = after - before;
	console.log(before);
	console.log(after);
	console.log("answer: " + sum);
	return sum;
}

findDifference();