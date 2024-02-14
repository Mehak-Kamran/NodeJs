const fs=require("fs")

let readstream=fs.createReadStream("Basics/stream/blog.txt",{encoding:"utf8"})
writestream=fs.createWriteStream("Basics/stream/blog1.txt")

readstream.on("data",(chunks)=>{
    console.log("----new chunk-----")
    console.log(chunks)
    writestream.write("----newchunk----")
     writestream.write(chunks)

})

//writestream


