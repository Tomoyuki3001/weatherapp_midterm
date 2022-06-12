// let weather = {
//   apiKey: "6c59dedd8571d8744b0f1b86011d6de9",
//   fetchWeather: function (city) {
//     console.log("city",city)
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//         city +
//         "&units=metric&appid=" +
//         this.apiKey
//     )
//       .then((response) => response.json())
//       .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data) {
//       const {name} = data;
//       const {icon, description} = data.weather[0];
//       const {temp, humidity} = data.main;
//       const {speed} = data.wind;
//       console.log(name,icon,description,temp,humidity,speed);
//       document.querySelector(".city").innerText = "Weather in " + name;
//       document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//       document.querySelector(".description").innerText = description;
//       document.querySelector(".temp").innerText = temp + "°C";
//       document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//       document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
//       document.querySelector(".weather").classList.remove("loading");
//     },
//   };

//   weather.fetchWeather("Venice");

//   search: function () {
//     this.fetchWeather(document.querySelector(".lookweather").value);
//   }
// };

// document.querySelector(".search button").addEventListener("click", function() {
//   weather.search();
// });

// document.querySelector(".lookweather").addEventListener("keyup", function (event) {
//   if (event.key == "Enter") {
//     weather.search();
//   }
// };

  
 
function showCurrentData(data) {
  const {name} = data;
  const {icon, description} = data.weather[0];  
  const {temp, humidity} = data.main;
  const {speed} = data.wind;
  
  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
  document.querySelector(".weather").classList.remove("loading");
}