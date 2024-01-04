// how to show html tag and json data in wb page by express

const express=require('express')  // package express ka 

//isko exectable bnana hia 

const app = express();

app.get('',(req,res)=>{
    res.send("<h3>HEllo I Am Alfaiz</h3> <a href='/about' > Click me </a>")  //link to another page
})  


app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder ="enter your name"/> 
    name = ${req.query.name} 
    `)
   
}) 


app.get('/help',(req,res)=>{
    res.send([
        {
            name:"anil",
            gmail:"shidhu@gmail.com"
        },{
            name:"anil",
            gmail:"sam@gmail.com"
        }
    ])
}) 



app.listen(5000);