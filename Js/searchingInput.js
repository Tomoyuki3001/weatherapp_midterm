import WEATHER_OPEN_KEY from "./apikeys.js";

// Autocomplete Options
var defaultBounds = new google.maps.LatLngBounds();
var options = {
  types: ["(cities)"],
  bounds: defaultBounds,
};
// get DOM’s input element
var input = document.getElementById("autocomplete");
// Make Autocomplete instance
var autocomplete = new google.maps.places.Autocomplete(input, options);
// Listener for whenever input value changes
autocomplete.addListener("place_changed", function () {
  // Get place info
  var place = autocomplete.getPlace();
  console.log("place", place.name)
  localStorage.setItem("cityName", place.name)
  // Do whatever with the value!
  let latitude = place.geometry.location.lat();
  let longitude = place.geometry.location.lng();
  const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_OPEN_KEY}`;
  //Create objects for Ajax communication
  let xhr = new XMLHttpRequest();
  //Set signal and URL
  xhr.open("GET", requestUrl);
  //Execute signal
  xhr.send();
  //after change function, execute signal.
  xhr.onreadystatechange = function () {
    //complete signal.
    if (xhr.readyState == 4) {
      ShowTodaysWeather(xhr.responseText);
    }
  };

  //  Display current weather

  function ShowTodaysWeather(response) {
    let obj = JSON.parse(response);
    console.log(obj);
  }
});
