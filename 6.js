var fs = require('fs');

fs.writeFile('message.txt', '2', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});