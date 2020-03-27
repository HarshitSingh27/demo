var fs = require('fs');
var content = fs.readFileSync('sin.json','utf8');
var write = fs.writeFile('appp','#HarshitSingh','utf8',function(error){
    if(error) throw error ;
    console.log('File written');
});
console.log(content);