//npm install express for installling express before use 
//dependencies me add hogya express

const express=require('express')  // package express ka 

//isko exectable bnana hia 

const app = express();

app.get('',(req,res)=>{
    res.send("hello this is home page")
})  //get method provide route get post (route path , call back(req,rees))

app.get('/about',(req,res)=>{    //get method provide routing page and second data 
    res.send("hello this is about page")
})

app.get('/help',(req,res)=>{    //get method provide routing page and second data 
    res.send("welcome this is help page")
})

//make server

app.listen(5000);
