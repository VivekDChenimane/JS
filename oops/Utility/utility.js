let fileSystem = require('fs');

writeToFile(path,data){
    fileSystem.writeFile(path,data,(err) => {
    if(err) throw err;
    })
}
readFromFile(path){
    fileSystem.readFile(path,err => {
        if(err) throw err;
    })
}