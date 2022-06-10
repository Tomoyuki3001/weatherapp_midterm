import getCurrentLocation from "./getDataLocationWeather";
getCurrentLocation;

//Time settings
const timeE1 = document.getElementById("time");
const dateE1 = document.getElementById("date");
const currentWeatherItemsE1 = document.getElementById("current-weather-items");
const currentTemp = document.getElementById("current-temp");
const currentPlaces = document.getElementById("place-container");
const weatherForecastE1 = document.getElementById("weather-forecast-days");
const weatherForecastE2 = document.getElementById("weather-forecast-hours");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function set2(num) {
  let ret;
  if (num < 10) {
    ret = "0" + num;
  } else {
    ret = num;
  }
  return ret;
}

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12Format = hour >= 13 ? hour % 12 : hour;
  const minutes = set2(time.getMinutes());
  const ampm = hour >= 12 ? "PM" : "AM";

  timeE1.innerHTML =
    hoursIn12Format + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`;

  dateE1.innerHTML = days[day] + "/" + date + "/" + months[month];
}, 1000);

function currentLocation(data) {
  currentPlaces.innerHTML = `
    <div>${data.timezone}</div>
    `;

  let { weather, temp, humidity, wind_speed } = data.current;

  currentTemp.innerHTML = `
    <div>${temp}°C</div>
    <img
          src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"
          alt="weather icon"
          class="weather-icon"
        />
    `;

  currentWeatherItemsE1.innerHTML = `
    <div class="weather-item">
    <div>Humidity</div>
    <div>${humidity}%</div>
  </div>
  <div class="weather-item">
    <div>Wind speed</div>
    <div>${wind_speed}</div>
  </div>
  `;
}

currentLocation();
