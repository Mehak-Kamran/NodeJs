//creating server
const express=require("express")
//invoking express
const app=express()
//setting ejs view engine to run ejs files
app.set("view engine","ejs")
//connecting with css file 
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
//requiring route
const blogroute=require("./route/blogroute")
//setting up db through mongoose
const mongoose=require("mongoose")
let dbuser="mongodb+srv://mak:test123@node.un9d26a.mongodb.net/node?retryWrites=true&w=majority&appName=node"
mongoose.connect(dbuser)
    .then((result)=>
       { 
        console.log("db connected")
        //server is listening
        app.listen(3000)
       })
    .catch((err)=>{console.log(err)})

//setup simple links

app.get("/",(req,res)=>{
    
    res.render("home",{title:"Home"})
})

app.get("/about",(req,res)=>{
    res.render("about",{title:"About"})
})


//routing /blog links
app.use("/blogs",blogroute)


app.use((req,res,next)=>{
   res.status(404).render("errormsg",{title:"404 Error"});
   
});

