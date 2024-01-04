// html page and display to user  by express 

//public folder bnaya hai or html file bnyi about iski load karvana hai 


const express = require('express')

//excutable 
const app = express()


const path = require('path')

// console.log(__dirname); //name directory ka 

// console.log(__dirname+'/public');

const publicpath = path.join(__dirname,'public')

// console.log(publicpath);

// ab 

app.use(express.static(publicpath)); //use excutable  funciton or alg se bhi function use kar rah hai  (express ek frame work hai )

// page direct excess nhi ho 5000 pr to uske liye file name index.html rakh do 

app.listen(5000)


//url excess http://localhost:5000/about.html


