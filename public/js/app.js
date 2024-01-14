console.log('Client side javscript file is loaded!!')


const weatherForm = document.querySelector('form')
const search =document.querySelector('input')
const  messageOne = document.querySelector('#meassage-1')
const messageTwo = document.querySelector('#meassage-2')


weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location =search.value
    const url = 'http://localhost:3000/weather?address='+location

    messageOne.textContent='Loading'
    messageTwo.textContent=''

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent='Error'
            }
            else{
                messageOne.textContent='the temperature is ' + data.temprature
                messageTwo.textContent='the forecast is '+data.forecast
                console.log(data)
            }
        })
    })
})