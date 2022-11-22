import showWheatherData from "./daysHoursWheather.js";
import WEATHER_OPEN_KEY from "./apikeys.js";

navigator.geolocation.getCurrentPosition((success) => {
  if (latitude && longitude === undefined) {
    latitude = 49.2786062;
    longitude = -123.0999112;
  }
  let { latitude, longitude } = success.coords;
  storeDefaultCity(latitude, longitude);
  getData("forecast", latitude, longitude);
  getData("weather", latitude, longitude);
});

function storeDefaultCity(latitude, longitude) {
  let cityInfo = {
    cityName: "Your city",
    coordinate: { latitude, longitude },
  };
  localStorage.setItem("city", JSON.stringify(cityInfo));
}

export const getData = function (type, latitude, longitude) {
  if (!type) return;
  fetch(
    `https://api.openweathermap.org/data/2.5/${type}?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${WEATHER_OPEN_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (type === "forecast") {
        showWheatherData(data);
      } else {
        showCurrentData(data);
      }
    });
};
