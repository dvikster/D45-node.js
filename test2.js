var fs = require('fs')
fs.readFile('text.txt', (err, data) => {
  if (err) throw err;
var text=data.toString();
console.log(text);
});
