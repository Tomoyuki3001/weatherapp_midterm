import WEATHER_OPEN_KEY from "./apikeys.js";

const request = new XMLHttpRequest();

request.open(
  "GET",
  `https://api.openweathermap.org/data/2.5/onecall?lat=49.2827&lon=-123.1207&appid=${WEATHER_OPEN_KEY}`,
  true
);
request.responseType = "json";

request.onload = function () {
  var data = this.response;
  console.log(data);
};

request.send();
