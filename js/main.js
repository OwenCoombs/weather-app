import axios from 'axios'



// create function for getting the api and spitting out in console
// Function to handle the click event and toggle page visibility
// main.js

document.addEventListener('DOMContentLoaded', function() {
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const button = document.querySelector('.btn');
 

  // Function to toggle visibility between pages
  function togglePages() {
    page1.classList.toggle('d-none'); // Toggle visibility of page1
    page2.classList.toggle('d-none'); // Toggle visibility of page2
  }

  // Event listener for button click
  button.addEventListener('click', togglePages);
});



let condition = '';
let temperatureInKelvin = '';
let temperatureInFahrenheit = '';
let temperatureInCelsius = '';
let city = '';

function getLocation() {
  axios.get('http://api.openweathermap.org/geo/1.0/zip?zip=40515,US&appid=5e0a68ade53e10124835e4bf1d41ca81')
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

function getWeather() {
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=37.9651&lon=-84.4708&appid=5e0a68ade53e10124835e4bf1d41ca81')
    .then(response1 => {
      console.log('data', response1.data)
      temperatureInKelvin = response1.data.main.temp;
      condition = response1.data.weather[0].description;
      console.log({ condition })
      temperatureInFahrenheit = (temperatureInKelvin - 273.15) * 9/5 + 32;
      temperatureInCelsius = temperatureInKelvin - 273.15;
      console.log({ temperatureInFahrenheit })
      document.getElementById("K").textContent = temperatureInKelvin;
      document.getElementById("F").textContent = temperatureInFahrenheit.toFixed(2)
      document.getElementById("C").textContent = temperatureInCelsius.toFixed(2)
      document.getElementById("conditions").textContent = condition;
    })
    .catch(error => {
      console.log('error', error)
    })
}

getWeather()
