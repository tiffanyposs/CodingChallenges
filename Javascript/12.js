var triangleNumbers = function(){
	var added_num = 1;
	var total = 0;
	var found = false;
	while(found === false){
		total += added_num;
		added_num++;
		var counter = 0;
		var divide = [];
		while(counter < total){

			var answer = total/counter;
			if(answer % 1 === 0){
				divide.push(answer);
			}
			if(divide.length >= 500){
				console.log(divide)
				console.log(added_num + " " + total)
				found = true;
				return total;
			}
			counter++;
		}

	}
}

triangleNumbers()