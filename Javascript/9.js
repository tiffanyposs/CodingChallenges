var a = 1;
var b = 1;
var c = 1;

var findThousand = function(){
	while (a <= 1000){
		var root_a = a*a;
		while(a + b < 1000){
			var root_b = b*b;
			var sum = root_a + root_b;
			while(c*c <= sum){
				if(c*c === sum){
					if(a + b  + c === 1000){
						console.log(a + " + " + b + " + " + c + " = 1000");
						return a + " + " + b + " + " + c + " = 1000";						
					}
				}	
				c++;
			}
			b++;
		}
		a++;
		b = 1;
		c = 1;
	}

}


findThousand()