import { getData } from "./index.js";

// Autocomplete Options
var options = {
  types: ["(cities)"]
};

var input = document.getElementById("autocomplete");

document.addEventListener("DOMContentLoaded", () => {
  let autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.addListener("place_changed", function () {
    let place = autocomplete.getPlace();
    let cityName = place.name;
    let latitude = place.geometry.location.lat();
    let longitude = place.geometry.location.lng();
    storeCurrentCity(cityName, latitude, longitude);

    getData("forecast", latitude, longitude); 
    getData("weather", latitude, longitude);

    resetFavoriteSelector();
  });
})

function storeCurrentCity(cityName, latitude, longitude){
  let cityInfo = {
      "cityName": cityName,
      "coordinate": {latitude, longitude},
  }
  let prevCity = JSON.parse(localStorage.getItem("city"));
  if(prevCity != null) localStorage.removeItem("city");
  localStorage.setItem("city", JSON.stringify(cityInfo));
}

function resetFavoriteSelector() {
  const selector = document.getElementById("favorite");
  selector.selectedIndex = 0;  
}