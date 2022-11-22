import { getData } from "./index.js";

localStorage.setItem("favorite", "[]");
const favList = JSON.parse(localStorage.getItem("favorite"));

for (let city of favList) {
  var option = document.createElement("option");
  option.text = city.cityName;
  option.value = JSON.stringify(city.coordinate);
  let selector = document.getElementById("favorite");
  selector.appendChild(option);
}

function displayFavoriteCity() {
  let selector = document.getElementById("favorite");
  console.log("check", selector);
  let idx = selector.selectedIndex;
  let selectedItem = JSON.parse(selector.options[idx].value);
  console.log("check2", selectedItem);

  let name = selector.options[idx].innerHTML;

  let latitude = selectedItem.latitude;
  let longitude = selectedItem.longitude;

  resetInputColumn();
  getData("weather", latitude, longitude);
  getData("forecast", latitude, longitude);

  const cityList = JSON.parse(localStorage.getItem("city"));
  localStorage.removeItem("city");

  const city = {
    cityName: name,
    latitude: latitude,
    longitude: longitude,
  };

  localStorage.setItem("city", JSON.stringify(city));
}

function resetInputColumn() {
  let input = document.getElementById("autocomplete");
  input.value = null;
}

const favoriteSelector = document.getElementById("favorite");
favoriteSelector.addEventListener("change", displayFavoriteCity);
