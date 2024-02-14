const fs=require("fs")

let readstream=fs.createReadStream("Basics/stream/blog.txt",{encoding:"utf8"})

readstream.on("data",(chunks)=>{
    console.log("----new chunk-----")
    console.log(chunks)

})