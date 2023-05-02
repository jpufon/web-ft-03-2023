const fs = require ('fs');// core module
let fileName = "sample.txt"


// fs.writeFile(fileName, "I love node", (error)=>{
    
//     if(error){
//         console.log(error.message);
//     }
//     console.log("file saved at sample.txt");
// })

fs.readFile('preamble.txt',(err, bufferedData)=>{
    if(err){
        console.log(err.message);
        return;
    }
    let data = bufferedData.split("")

})