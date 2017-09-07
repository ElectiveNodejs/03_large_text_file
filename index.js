var fs = require('fs');

fs.readFile('big.txt', 'utf-8', function(err, data){
    console.log('Big Text finnished');
});

fs.readFile('small.txt', 'utf-8', function(err, data){
    console.log('small Text finnished');
});

fs.readFile('medium.txt', 'utf-8', function(err, data){
    console.log('medium Text finnished');
});

console.log('End of file');

