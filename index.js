require('dotenv').config();
const express = require("express");
const path= require('path')
const userRouter= require('./router/userRouter')
const mongoose = require('mongoose');
const { type } = require('os');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.use('/api/user', userRouter)

mongoose.connect("mongodb://127.0.0.1:27017/deve")
.then(()=> console.log("connected"))
.catch((err)=>console.log(err))

// const developerSchema= new mongoose.Schema({
//   name:{
//     type: String,
//     required: true,
//   },
//   skill: {
//     type: Array,
//     required: true,
//   }
// })
// const developer= mongoose.model("developer", developerSchema)

app.use(express.json());
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
const MONGOURL= process.env.MONGO_URL

//   app.listen(PORT, () => {
//   console.log(`server is listening in port: ${PORT}`);
// });
app.listen(PORT, () => {
console.log(`server is listening in port: ${PORT}`)})

app.get('/getFile', (req,res)=>{
  res.sendFile(path.join(__dirname, 'upload', 'machine.jpg'))
})


