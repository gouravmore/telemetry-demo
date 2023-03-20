const express=require('express');
const cors=require('cors');
const app=express();
const PORT=5000;
app.get('/',(req,res)=>{
res.send("Welcome to CORS server! 😁")
})
app.get('/api',(req,res)=>{
res.json({'candy':'bubble-gum'})
})
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
app.use(cors());
app.get('/candy',(req,res)=>{
  res.set('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.json({'candy':'bubble-gum'})
})
