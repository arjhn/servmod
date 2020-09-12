const express=require('express');
const fileR=require('fs');
const data=require('./data.js');

const app =express();


app.get('/',(req,res)=>{
    res.send('Hello World')
    data.push(
        {
            name:'heo',
            Sex:'Male'
        }
    )
    
    fileR.writeFile('./data.js',JSON.stringify(data),'utf-8',(err)=>{
        if(err) throw err
    })

    fileR.readFile('./data.js','utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)
    })



})

app.listen(8001);