var fs = require('fs');
fs.readFile('3.json', function(err, data){
    if (err) throw err;
    var text = data.toString();
    //string to array
   var text =JSON.parse(text);
   console.log(text.hi);
})