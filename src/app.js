const path=require('path')
const express = require('express')
 
const app = express()

app.set('view engine' , 'hbs')
app.use(express.static(path.join(__dirname,'../public')))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather!!',
        name:'shah'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Shah'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        help_message:' this is the help section'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:"sunny",
        location:'jaipur'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})

