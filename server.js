const express = require('express')
const app = express()
const Port=5000
app.use(express.json())
const blogsRouter=require("./routers/blogRouter")
// const { v4: uuidv4 } = require('uuid');

// app.use(express.json())

// const blogs=[{
//     id:new Date().toString().slice(4,21),
//     title:'salam',
//     description:'loremloremlorem',
//     createdAt:20,
//     author:{
//         name:'blabla',
//         surname:'ahadfaq'
//     }
// },{
//     id:new Date().toString().slice(4,21),
//     title:'salam',
//     description:'loremloremlorem',
//     createdAt:20,
//     author:{
//         name:'blabla',
//         surname:'ahadfaq'
//     }
// }]

// app.put("/blogs/:id", (req,res)=>{
//     const {id}=req.params
//     let target=blogs.find((item)=>item.id==id)
//     if(target){
//         const indexOfTarget=blogs.indexOf(target)
//         console.log(indexOfTarget)
//         target={...target,...req.body}
//         blogs[indexOfTarget]={...target}
//         res.send(blogs)
//     }
//     else{
//         res.send('error')
//     }
// })

// app.post("/blogs",(req,res)=>{
//     res.send(req.body)
//     const newBlog={
//         id:uuidv4(),
//         ...req.body
//     }
//     blogs.push(newBlog)
//     res.send("item created")
// })

// app.delete("/blogs/:id",(req,res)=>{
//     const {id}=req.params
//     const target=blogs.find((item)=>item.id==id)
//     if(target){
//         const indexOfTarget=blogs.indexOf(target)
//         blogs.splice(indexOfTarget,1)
//         res.send("item")
//     }
//     else{
//         res.send("error")
//     }
    

// })
// app.get("/blogs",(req,res)=>{
//     res.send(blogs)
// })
// app.get("/blogs/:id",(req,res)=>{
//     const {id}=req.params
//     const target=blogs.find((item)=>item.id==id)
//     if(target){
//         res.send(target)
//     }
//     else{
//         res.send('error')
//     }
// })

app.use("/blogs",blogsRouter)
app.listen(Port,()=>{
    console.log("backend")
})