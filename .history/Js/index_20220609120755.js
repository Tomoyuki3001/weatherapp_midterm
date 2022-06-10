import showWheatherData from "./daysHoursWheather.js";

navigator.geolocation.getCurrentPosition((success) => {
  console.log(success);
  let { latitude, longitude } = success.coords;
  getData("forecast", latitude, longitude);
});

function getData(type, latitude, longitude) {
  let selectedLocation;
  fetch(
    `https://api.openweathermap.org/data/2.5/${type}?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${WEATHER_OPEN_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      selectedLocation = data;
      if (type === "forecast") {
        showWheatherData(data);
      }
    });
}
