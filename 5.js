var fs = require('fs')
// var array  = fs.readFileSync('text.txt').toString().split("\n");
// for (i in array){
// console.log(i+ '---' + array[i])
// }

var array  = fs.readFileSync('text.txt');
array =array.toString();
array =array.split("\n");
console.log(array);
for (i in array){
	console.log(i+ '---' + array[i])
}