var array = [1, 2]

var x = 0;
var y = 1;

while(array[x] + array[y] <= 100){
	var new_num = array[x] + array[y];
	if(new_num <= 100){
		array.push(new_num)
		x++;
		y++;
	}
}

array.forEach(function(each){
	if(each % 2 != 0){
		var index = array.indexOf(each);
		array.splice(array[index], 1)
	}
})

console.log(array)