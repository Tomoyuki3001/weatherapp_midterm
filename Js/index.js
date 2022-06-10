import showWheatherData from "./daysHoursWheather.js";
import WEATHER_OPEN_KEY from "./apikeys.js";
// import getData from "searchingCityInput.js";

navigator.geolocation.getCurrentPosition((success) => {
  console.log(success);
  let { latitude, longitude } = success.coords;
  getData("forecast", latitude, longitude);
});

export const getData = function(type, latitude, longitude) {
  if (!type) return;
  fetch(
    `https://api.openweathermap.org/data/2.5/${type}?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${WEATHER_OPEN_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (type === "forecast") {
        showWheatherData(data);
      } else {
        // showCurrentData(data);
      }
    });
}
