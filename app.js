const api ={
 key :"e28bde30c1a9b8e58e147e6d49be9f2e",
    base : "https://api.openweathermap.org/data/2.5/"
}   
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(evt){
    if (evt.keyCode ==13) {
        getResults(searchBox.value);
       
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather){
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${math.round(weather.main.temp)}<span>°C</span>`;
    let weather_el = document.querySelector(".current .weather");
     weather_el.innerText = weather.weather[0].main;

     let hiLow = document.querySelector(".hi-low");
     hiLow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`


}
function dateBuilder (d) {
    let months = ["January","February","Match","April","Mary","June","July","August",
"September","October","November","December"];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day} ${date} ${month} ${year}`;
}