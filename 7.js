var fs = require('fs');

fs.readFile('message.txt', function(err, data){
    if (err) throw err;
    var text = data.toString();
   	console.log('text - '+text);
	var newText = text +'new text here '; 

	fs.writeFile('message.txt', newText, (err) => {
	  if (err) throw err;
	  console.log('The file has been saved!');
	  console.log('new text - '+ newText);
	});
})