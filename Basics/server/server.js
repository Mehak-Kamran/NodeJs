//server

// let http=require("http")
// let server=http.createServer((req,res)=>{
//     console.log("req has been made")
// })

// server.listen(3000,"localhost",()=>{
//     console.log("server has listened")
// })

//req res

let http=require("http")
let server=http.createServer((req,res)=>{
    //console.log(req.url,req.method)
    //res.setHeader("Content-Type","text/plain")
    res.setHeader("Content-Type","text/html")
    res.write("<p>hi there</p>")
    res.write("<p>hi there again</p>")
    res.end()
})

server.listen(3000,"localhost",()=>{
    console.log("server has listened")
})