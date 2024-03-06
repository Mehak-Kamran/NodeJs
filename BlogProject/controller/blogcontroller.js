const Blog=require("../model/model")

//saving data in database
const blogpost=(req,res)=>{
    const data=new Blog(req.body)
    data.save()
        .then((result)=>{res.redirect("/blogs")})
        .catch((err)=>{console.log(err)})
}

//displaying data
const blogdisplay=(req,res)=>{
     Blog.find().sort({createdAt:-1})
           .then((result)=>{
            res.render("blogs",{ blogarray:result , title: 'All blogs'})
           })
           .catch(err=>console.log(err))
}

//details
const blogdetails=(req,res)=>{
    const id=req.params.id;
    Blog.findById(id)
         .then((result)=>{
            res.render("detail",{blog:result,title:"Blog Details"});
         })
         .catch(err=>console.log(err))
}
//delete 
const blogdelete=(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>
           {
              res.json({redirect:"/blogs"})
           })
        .catch((err)=>{console.log(err)})

}





//simple normal linking
const createblog=(req,res)=>{
    res.render("createblogs",{title:"Create a Blog"})    
}






module.exports={
    blogpost,
    blogdisplay,
    createblog,
    blogdetails,
    blogdelete,
}
  