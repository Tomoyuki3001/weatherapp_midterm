import WEATHER_OPEN_KEY from "./apikeys.js";
// import getAPI from "./getAPIInformation.js";

const weatherForecastE1 = document.getElementById("weather-forecast-days");
const weatherForecastE2 = document.getElementById("weather-forecast-hours");

function getWheatherData() {
  let selectedLocation;
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);
    let { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${WEATHER_OPEN_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        selectedLocation = data;
        showWheatherData(data);
      });
  });
}
getWheatherData();

function showWheatherData(data) {
  const newDaysArray = [];
  const daysWheatherData = data.list;
  newDaysArray.push(
    daysWheatherData[0],
    daysWheatherData[7],
    daysWheatherData[15],
    daysWheatherData[23],
    daysWheatherData[31]
  );

  for (let i = 0; i < newDaysArray.length; i++) {
    const daysCard = document.createElement("div");

    let temp = newDaysArray[i].main.temp;
    let newTemp = Math.trunc(temp);
    let tempFeels = newDaysArray[i].main.feels_like;
    let newTempFeels = Math.trunc(tempFeels);

    daysCard.classList.add("days_box");
    daysCard.innerHTML = `
    <div class="day">${moment(newDaysArray[i].dt * 1000).format("ddd")}</div>
      <img
        src="http://openweathermap.org/img/wn/${
          newDaysArray[i].weather[0].icon
        }@2x.png"
        alt="weather icon"
        class="weather-icon"
      />
      <div class="temp">${newTemp}&#176C</div>
      <div>Feels like</div>
      <div class="temp">${newTempFeels}&#176C</div>
    `;
    weatherForecastE1.appendChild(daysCard);
  }

  const hoursData = data.list;
  for (let i = 0; i < 8; i++) {
    const hoursCard = document.createElement("div");
    hoursCard.classList.add("hours_box");
    hoursCard.innerHTML = `
      <img
        src="http://openweathermap.org/img/wn/${hoursData[i].weather[0].icon}@2x.png"
        alt="weather icon"
        class="weather-icon"
      />
      <div class="temp">Temperature - ${hoursData[i].main.temp}&#176C</div>
    `;
    weatherForecastE2.appendChild(hoursCard);
  }
}
