var months = {
	"january": 31,
	"february": 28,
	"march": 31,
	"april": 30,
	"may": 31,
	"june": 30,
	"july": 31,
	"august": 31,
	"september": 30,
	"october": 31,
	"november": 30,
	"december": 31
}

var dayCounter = function(years){
	var sundayCounter = 0;
	var dayIndex = 1;
	for(var y = 1; y <= years; y++){
		for(month in months){
			if(month === 'february'){
				if(y % 4 === 0){
				  months[month] = 29;
				}else{
				  months[month] = 28;
				}
			}
			for(var i = 1; i <= months[month]; i++){
				if(i === 1 && dayIndex === 7){
					sundayCounter++;
				}
				if(dayIndex === 7){
					dayIndex = 1;
				}else{
					dayIndex++;
				}
			}
		}
	}
	return sundayCounter
}

dayCounter(100)