function displayTemperature(response){
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
temperatureElement.innerHTML = Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);

}



let apiKey = "6b0bbd8113f83ef6f180221d2ea2bfa5";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;


axios.get(apiURL).then(displayTemperature);

