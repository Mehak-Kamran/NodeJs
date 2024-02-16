let http=require("http")
let server=http.createServer((req,res)=>{
    console.log("req has been made")
})

server.listen(3000,"localhost",()=>{
    console.log("server has listened")
})