const express=require('express');
const fileR=require('fs');
const bodyParser=require('body-parser');

const data=require('./data.js');
const configvar=require('./configvar.js');
const configfun=require('./configfun');

const app =express();

app.get('/',(req,res)=>{
    res.send('Hello World')
    //configfun.readFile(fileR,'./data.js')
})

app.post('/itemiadd',bodyParser.json(),(req,res)=>{
    
    data.push({
        name:req.body.nameVal,
        Sex:req.body.sexVal
    })

    configfun.writeFile(fileR,'./data.js',data)
})

app.use((req, res, next) => {
    return next({status: 404, message: 'not found'})
  })

const listener = app.listen(configvar.port,()=>{
    console.log("App listening started")
});