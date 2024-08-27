const fs = require('fs');
fs.writeFile('newFile.txt','Hello, My name is Ammu!',(err) =>{
    if(err) {
        console.error(err);
        return;
    }
    console.log('file written succesfully.');
});