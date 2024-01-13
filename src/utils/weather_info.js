const request=require('request')

const weather_info = (latitude , longitude , callback)=>{
    const url_weather= 'http://api.weatherstack.com/current?access_key=b75930aff67957b60cf2ec149be087fd&query='+ latitude + ',' + longitude+ '&units=m'
    request({url : url_weather , json:true} , (error,response)=>{
        if(error){
            callback('Unable to connect to weather services!!',undefined)
        }
        else if(response.body.error){
            callback('unable to find location' , undefined)
        }
        else{
            callback(undefined,response);
        }
        
    })
}

module.exports=weather_info