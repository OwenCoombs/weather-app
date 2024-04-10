import axios from 'axios'

//     function swanson () {
//     axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
//     .then(response => console.log('data', response.data))
//     .catch(error => {
//         console.log('error', error)
//     })

// }

// swanson()

// create function for getting the api and spitting out in console

let tempature = '';
let city = '';
function getLocation (){
    axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=40515,US&appid=5e0a68ade53e10124835e4bf1d41ca81'
    )
    .then(response => {
        console.log('data', response.data)
        city = response.data.name;
        document.getElementById("city").textContent = city;

        
        
    })
    .catch(error => {
        console.log('error', error)
    }) 
   
}


getLocation()

function getWeather(){
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=37.9651&lon=-84.4708&appid=5e0a68ade53e10124835e4bf1d41ca81')
    .then(response1 => {
        console.log('data', response1.data)
         tempature = response1.data.main.temp;
         console.log({tempature})
         document.getElementById("K").textContent = tempature;
         
    })
    .catch(error => {
        console.log('error', error)
    })
}

getWeather()
