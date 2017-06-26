var fs = require('fs');

fs.unlink('file_to_del.txt', (err) =>{
	if(err) throw err;
	console.log('success')
});