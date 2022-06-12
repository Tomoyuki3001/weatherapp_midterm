import { getData } from "./index.js";

function displayFavoriteCity() {
  let selector = document.getElementById("favorite");
  let idx = selector.selectedIndex;
  let selectedItem = JSON.parse(selector.options[idx].value);
  
  let latitude = selectedItem.latitude;
  let longitude = selectedItem.longitude;
  
  resetInputColumn();
  getData("weather", latitude, longitude);
}

function resetInputColumn() {
  let input = document.getElementById("autocomplete");
  input.value = null;
}

const favoriteSelector = document.getElementById("favorite");
favoriteSelector.addEventListener("change", displayFavoriteCity);


