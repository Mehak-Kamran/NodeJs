const express=require("express")
const router=express.Router()
const blogcontroller=require("../controller/blogcontroller")

//for post
router.post("/",blogcontroller.blogpost);
//for display blogs
router.get("/",blogcontroller.blogdisplay);
//organize
router.get("/createblogs",blogcontroller.createblog);
//detail
router.get("/:id",blogcontroller.blogdetails)
//delete
router.delete("/:id",blogcontroller.blogdelete)





module.exports=router;