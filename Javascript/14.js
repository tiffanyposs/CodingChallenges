var numbers = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "fourty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
	100: "hundred",
	1000: "thousand"
}


var findLength = function(num){
	var length = num.toString().length
	if(length === 1){
		var answer = numbers[num]
		var answer_length = answer.length
		return answer_length;
	}else if(length === 2){
		var num_array = num.toString().split("");
		var answer = numbers[num_array[0] + "0"] + " " + numbers[num_array[1]]
		var answer_length = answer.split(" ").join("").length;
		return answer_length;
	}else if(length === 3){
		var num_array = num.toString().split("");
		var hundred = numbers[num_array[0]] + " " + numbers[100]
		var second = numbers[num_array[1] + "0"]
		var first = numbers[num_array[2]]
		var answer = hundred + " " + second + " " + first;
		var answer_length = answer.split(" ").join("").length;
		return answer_length;
	}else if(length === 4){
		var num_array = num.toString().split("");
		var thousand = numbers[num_array[0]] + " " + numbers[1000]
 		var hundred = numbers[num_array[1]] + " " + numbers[100]
		var second = numbers[num_array[2] + "0"]
		var first = numbers[num_array[3]]
		var answer = thousand + " " + hundred + " " + second + " " + first;
		var answer_length = answer.split(" ").join("").length;
		return answer_length;
	}else{
		return "That number is too long!"
	}

}

console.log(findLength(423))