var multiplyNumbers = function(min_num, max_num){
	var first_num = 0;
	var second_num = 0;
	var highest_number = 0;

	var num_one = min_num;
	var num_two = min_num;
	while(num_two <= max_num){
		while(num_one < max_num){
			var total = num_one * num_two;
			var answer = checkPalindrome(total);
				if(answer === true && total > highest_number){
					first_num = num_one;
					second_num = num_two;
					highest_number = total;
				}
			num_one ++;
		}
		num_one = num_two;
		num_two++;
	}
	return first_num + " * " + second_num + " = " + highest_number;
}


//checks a number if its a palindrome and returns true or false.
var checkPalindrome = function(num){
	var number = num.toString();
	var length = number.length;
	var half_length = length/2;
	var palindrome = true;
	//if its even
	number = parseInt(number);
	if(number % 2 === 0){
		number = number.toString();
		for(var i = 0; i < half_length; i++){
			if(number[i] != number[length - 1]){
				palindrome = false;
			}
			length--;
		}
	}
	// if its odd
	if(number % 2 != 0){
		number = number.toString();
		for(var i = 0; i < half_length - 0.5; i++){
			if(number[i] != number[length - 1]){
				palindrome = false
			}
			length--;
		}
	}

	if(palindrome === true){
		return true
	}
	else{
		return false
	}

}

console.log(multiplyNumbers(100, 999))
