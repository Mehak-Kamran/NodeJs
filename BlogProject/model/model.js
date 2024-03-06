const mongoose=require("mongoose");
const schema=mongoose.Schema;
//creating schema for blog post
const blogschema=new schema({
    title:{type:String,required:true},
    snippet:{type:String,required:true},
    body:{type:String,required:true},
},{timestamps:true})

const model=mongoose.model("blogarray",blogschema)
module.exports= model;