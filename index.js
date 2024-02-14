const express=require("express");
const app=express();
const mongoose=require("mongoose");
const routes=require("./routes/api")

const port=3005;

mongoose.connect("mongodb://localhost:27017/testapp")

mongoose.connection.on('error',err=>{
    console.log('error on connection to mongodb')
})
mongoose.connection.on('connected', () => console.log('connected'));



app.use(express.json());
app.use('/', routes);

app.listen(port,()=>{
    console.log("connected on port 3005");
})