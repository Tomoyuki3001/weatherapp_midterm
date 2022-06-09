import WEATHER_OPEN_KEY from "./apikeys.js";
//Time setting
const weatherForecastE1 = document.getElementById("weather-forecast-days");
const weatherForecastE2 = document.getElementById("weather-forecast-hours");

getWheatherData();

let selectedLocation;
function getWheatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);
    let { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${WEATHER_OPEN_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        selectedLocation = data;
        showWheatherData(data);
      });
  });
}

// let selecteddayshours;
// function hoursDays() {
//   navigator.geolocation.getCurrentPosition((success) => {
//     console.log(success);
//     let { latitude, longitude } = success.coords;

//     fetch(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${WEATHER_OPEN_KEY}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         selecteddayshours = data;
//         showLocationData(data);
//       });
//   });
// }

// hoursDays();

function showWheatherData(data) {
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

  let otherDays = "";

  data.daily.forEach((day, idx) => {
    const dayDate = day.dt * 1000;
    if (idx == 0) {
    } else {
      otherDays += `
      <div class="weather-forecast-items">
      <div class="day">${moment(dayDate).format("dddd")}</div>
      <img
        src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
        alt="weather icon"
        class="weather-icon"
        />
        <div class="temp">Night - ${day.temp.night}&#176; C</div>
        <div class="temp">Day - ${day.temp.day}&#176; C</div>
        </div>
        `;
    }
  });

  weatherForecastE1.innerHTML = otherDays;

  const hoursData = data.hourly;
  console.log("hours data", hoursData);
  const newArray = [];
  newArray.push(
    hoursData[2],
    hoursData[5],
    hoursData[8],
    hoursData[11],
    hoursData[14],
    hoursData[17],
    hoursData[20],
    hoursData[23]
  );
  for (let i = 0; i < newArray.length; i++) {
    console.log("", newArray[i].weather[0]);
    const hoursCard = document.createElement("div");
    hoursCard.innerHTML = `
    <div class=".hours_box">
      <img
        src="http://openweathermap.org/img/wn/${newArray[i].weather[0].icon}@2x.png"
        alt="weather icon"
        class="weather-icon"
      />
      <div class="temp">Temperature - ${newArray[i].temp}&#176C</div>
    </div>
    `;
    weatherForecastE2.appendChild(hoursCard);
  }
}

currentLocation();
