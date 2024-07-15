const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/todo_app");
const todoSchema= new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})


const TodoModel=mongoose.model("todo_app", todoSchema)

module.exports=TodoModel