//NODE JS

//Decalre libraries

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3001;

app.use(express.json());

//HRRP VERBS: POST, GET, PUT, PATCH, OPTIONS
//first endpoint
//GET
app.get("/",(req,res) => {
    res.status(200).json({message: "API isrunning"});
})

app.listen(port,() =>{
    console.log('The server is running, PORT: ${port}');

})