const express = require('express')

const app = express()

app.get('',(req,res)=>{
    res.send('<h1>Weather</h1>')
})

app.get('/help',(req,res)=>{
    res.send({
        name:'aditya',
        age:21
    })
})

app.get('/about',(req,res)=>{
    res.send('<h1> About Route</h1>')
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:"sunny",
        location:'jaipur'
    })
})

//app.com
//app.com/help
//app.com/about

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})

