let btn = document.getElementById("searchBtn");
btn.addEventListener("click" , getWeather);

function getWeather() {
let city = document.getElementById("cityInput").value;
let apiKey = "2617f85eaa19ab7f83f7ff4be1d06cd4";

  
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric")
    .then(res => res.json())
    .then(data => {

      displayData(data);

    });
}


function displayData(data) {
let city = data.name + ", " + data.sys.country;

let temp = data.main.temp;
let min = data.main.temp_min;
let max = data.main.temp_max;

let weather = data.weather[0].main;
  // time or  date show
  
let now = new Date();
 let time = now.toLocaleTimeString();

let day = now.getDate();
let month = now.toLocaleString('en-US', { month: 'long' });
let year = now.getFullYear();
let weekday = now.toLocaleString('en-US', { weekday: 'long' });

let date = day + " " + month + " [" + weekday + "] " + year;
 

  document.getElementById("cityName").innerText = city;
  document.getElementById("time").innerText = time;
  document.getElementById("date").innerText = date;
  document.getElementById("temp").innerText = temp + "°C";
  document.getElementById("minmax").innerText = `${min}°C (min) / ${max}°C (max)`;
  document.getElementById("condition").innerText = weather;
 // slide show
 

let box = document.getElementById("weatherBox");
box.classList.add("show");

  // background change

  changeBG(weather);

  
}


// create function
function changeBG(weather) {

  let body = document.body;

  if (weather == "Clear") {
    body.style.backgroundImage = "url('clearWeather.jpg')";
  }
  else if (weather == "Clouds") {
    body.style.backgroundImage = "url('cloudyWeather.jpg')";
  }
  else if (weather == "Rain") {
    body.style.backgroundImage = "url('rainWeather.jpg')";
  }
  else if (weather == "Haze") {
    body.style.backgroundImage = "url('hazeWeather.jpg')";
  }
  else if (weather == "Dust"){
    body.style.backgroundImage = "url('dustWeather.jpg')";
  }
   else if (weather == "Smoke"){
    body.style.backgroundImage = "url('smokewallpaper.jpg')";
  }

   else if (weather == "Snow"){
    body.style.backgroundImage = "url('snow.jpg')";
  }
  body.style.backgroundSize = "cover";
}
