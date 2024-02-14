const mongoose=require("mongoose");

const {Schema}=mongoose;

const appScema=new Schema({
title:{
    type:String,
    required:true,
    enum: ['todo1', 'todo2']
}


})
const TodoModel = mongoose.model('Todo', appScema);
module.exports = TodoModel;