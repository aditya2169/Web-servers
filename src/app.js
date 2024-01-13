const path=require('path')
const express = require('express')
const hbs=require('hbs')
const app = express()

// Define path or express config
const publicDirectoryPath= path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'templates/views')
const partialsPath=path.join(__dirname,'templates/partials')

// setup handelbars engie and views location
app.set('view engine' , 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather!!',
        name:'Aditya shah'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:'Aditya Shah'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Aditya Shah',
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

