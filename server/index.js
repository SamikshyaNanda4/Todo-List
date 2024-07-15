const TodoModel=require("./Models/Todo")

const express=require("express")
const cors=require("cors")
// const mongoose=require("mongoose")

const app=express() 



app.use(cors())
app.use(express.json())

app.post('/add', (req, res) => {
    const task=req.body.task;
    TodoModel.create({
        task:task})
        .then(result=> res.json(result))
        .catch(err=>res.json(err))
    }
 ) 


 app.get('/get', (req, res) => {
    TodoModel.find()
       .then(result=> res.json(result))
       .catch(err=>res.json(err))
    }
 )

 app.put('/update:id', (req, res) => {
    const {id}=req.params;
    console.log(id)
    TodoModel.findByIdAndUpdate({_id:id}, {done:true})
       .then(result=> res.json(result))
       .catch(err=>res.json(err))
    }
 )

 app.delete('/delete/:id', (req, res) => {
    const {id}=req.params;
    TodoModel.findByIdAndDelete({_id:id})
       .then(result=> res.json(result))
       .catch(err=>res.json(err))
    }
 )

app.listen(3009,()=>{
    console.log("Server is running on port 3009")
})
