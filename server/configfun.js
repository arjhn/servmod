const readFile=(fileR,fp)=>{
    fileR.readFile(fp,'utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)
        return data
    })
}

const writeFile=(fileR,fp,data)=>{
    
    datavar = "let data="+beautify(data)+"\n \n"+"module.exports=data"
    
    fileR.writeFile(fp,datavar,'utf-8',(err)=>{
        if(err) throw err
        console.log('Succesful Async write')
    })
}

const beautify=(data)=>{
    let datastr=JSON.stringify(data).replace(/{/g,"\n \t { \n \t \t")
    datastr=datastr.replace(/}/g,"\n \t  }")
    return datastr
}

module.exports={
    readFile:readFile,
    writeFile:writeFile
}