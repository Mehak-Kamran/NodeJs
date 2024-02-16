//server

// let http=require("http")
// let server=http.createServer((req,res)=>{
//     console.log("req has been made")
// })

// server.listen(3000,"localhost",()=>{
//     console.log("server has listened")
// })

//req res

// let http=require("http")
// let server=http.createServer((req,res)=>{
//     //console.log(req.url,req.method)
//     //res.setHeader("Content-Type","text/plain")
//     res.setHeader("Content-Type","text/html")
//     res.write("<p>hi there</p>")
//     res.write("<p>hi there again</p>")
//     res.end()
// })

// server.listen(3000,"localhost",()=>{
//     console.log("server has listened")
// })

//sending html file

let http=require("http")
let fs=require("fs")
let server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    fs.readFile("Basics/server/view/index.html",(err,data)=>{
        if(err){
           console.log(err)
        }
        else{
           res.write(data)
           res.end()
        }
    
})
})

server.listen(3000,"localhost",()=>{
    console.log("server has listened")
})
