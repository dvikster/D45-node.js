var fs = require('fs');
//читать содержимое каталога, даже скрытого

let path = "C:/xampp/htdocs/dev_upscale/D45-node.js/";



fs.readdir('.', (err, files) =>{
    let counter1=0, counter2=0;
    files.forEach(file => {
           fs.stat('.', (err, stats) => {
                if(err)
                    return console.log(err); //Handle error
                if(stats.isDirectory()){
                    ++counter2;
                    console.log(`${file} Is directory: ${stats.isDirectory()}`);
                }
            });
            fs.stat('.', (err, stats) => {
                if(err)
                    return console.log(err); //Handle error
                if(stats.isFile()){
                    ++counter1;
                    console.log(`${file} Is file: ${stats.isFile()}`);
                }

            });

    });
    let counter3 = counter1 + counter2;
    console.log(counter1, counter2, counter3);
});



// fs.readdir('.', (err, dirs) => {
//     if (err) throw err;
//     dirs.forEach(dir => {
//         console.log(dir);
//     });
// });


// fs.readFile('.', (err, files) =>{
    // let counter1=0, counter2=0;
    // if (err) throw err;
    // console.log(files);
    // files.forEach(file => {
    //     console.log(file);
        // if((file.indexOf('.') == 0) && (file.indexOf('.', 1) > 0)){
        //     ++counter1;
        // }
        // else if((file.indexOf('.') != 0) && (file.indexOf('.', 1) > 0)) {
        //     ++counter2;
        // }
    // });
    // let counter3 = counter1 + counter2;
    // console.log(counter1, counter2, counter3);
// });