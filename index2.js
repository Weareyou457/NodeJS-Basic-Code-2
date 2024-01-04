//Routing ke baare me express se 

const express = require('express');

//req or res kya hai // app.get kuch get karna ho page load karna hoto 

// data get by url request 

const app = express();

app.get('',(req,res)=>{
   
    console.log("data send by browser acpet by",req.query);
    console.log("data send by browser acpet by",req.query.name);

    res.send("hello i am " +req.query.name);
})

app.listen(5000)

// data send by browser acpet by { name: 'anil' }
// data send by browser acpet by anil