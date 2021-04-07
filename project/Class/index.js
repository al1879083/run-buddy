fs = require('fs'); 
fs.writeFile('index.js', 'Hello World', function (err)) {
    if (err) return console.log(err); 
    console.log('Hello World > helloworld.text');
});


fs.readFile('', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})