const path=require('path')
const express = require('express')
const hbs=require('hbs')
const app = express()
const geocode=require('./utils/geocode.js')
const weather_info=require('./utils/weather_info.js')

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

    if(!req.query.address){
        return res.send({
            error:'Must provide an address!!!'
        })
    }

    geocode(req.query.address,(error , {latitude,longitude})=>{
        weather_info(latitude,longitude,(error,response)=>{
            return res.send({
                location:response.body.location.name,
                temprature:response.body.current.temperature,
                forecast:response.body.current.weather_descriptions[0]
            })
        })
    })

    // res.send({
    //     address:req.query.address,
    //     forecast:"sunny",
    //     location:'jaipur'
    // })
})

app.get('/products',(req,res)=>{

    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }

    console.log(req.query)

    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:'No help!!',
        message:'Help article not found',
        name:'Aditya Shah'
    })
})
 
app.get('*',(reg,res)=>{
    res.render('error',{
        title:'404!!!',
        message:'Page not found',
        name:'Aditya Shah'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})

