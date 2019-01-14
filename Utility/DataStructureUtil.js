const file=require('fs');




module.exports={
writefile(filename,data){

file.writeFile(filename,data,(err)=>{

if(err) throw err;

})

}



}