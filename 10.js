var fs = require('fs');

//добавить папку
fs.mkdir('mmm2', function(e) {
	if(!e && e.code === 'EEXIST') {        
	//do something with contents
		console.log('Error');
	} 
	else{
		console.log('success');
	}

});
	
//удалить папку
fs.rmdir('mmm',function(e){
    if(e){
        console.log('Error');
    } else {
       console.log('remove');
    }
});

//читать содержимое каталога
fs.readdir('.', (err, files) =>{
    files.forEach(file => {
       console.log(file);
    })
});
