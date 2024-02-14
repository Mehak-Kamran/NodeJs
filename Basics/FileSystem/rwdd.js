const fs=require("fs")
const { text } = require("stream/consumers")

//writefile
// fs.writeFile("Basics/FileSystem/text.txt","hey",()=>{

//     console.log("file was written")
// })

//read
// fs.readFile("Basics/FileSystem/text.txt",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

//dir
// if(!fs.existsSync("Basics/FileSystem/hello")){
//       fs.mkdir("Basics/FileSystem/hello",(err)=>{
//                 console.log("dir created")
// })
// }

// else{
//     fs.rmdir("Basics/FileSystem/hello",()=>{
//         console.log("dir removed")
//     })
    
// }

//delete a file

if(fs.existsSync("Basics/FileSystem/jimin.txt")){

    fs.unlink("Basics/FileSystem/jimin.txt",()=>{
        console.log("file delted")
    })

}