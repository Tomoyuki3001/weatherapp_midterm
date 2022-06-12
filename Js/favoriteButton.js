// export function appendCurrentWeatherInfo() {
//   let favorite = document.getElementById("favorite"); 
//   let favoriteCitiesContainer = document.createElement("div");
//   favoriteCitiesContainer.setAttribute("id", "current-weather");
//   favorite.appendChild(favoriteCitiesContainer);
// }
// export function updateCurrentWeather(weatherObj){
//   let container = document.getElementById("current-weather");
//   container.innerHTML = `<p>${JSON.stringify(weatherObj)}<p>`
// }

function addFavoriteCity() {
  let currentCity = JSON.parse(localStorage.getItem("city"));

  let prevFavoriteCities = JSON.parse(localStorage.getItem("favorite"));
  let prevFavoriteCitiesName = [];
  
  if(prevFavoriteCities != null) {
    for(let city of prevFavoriteCities) {
      prevFavoriteCitiesName.push(city.cityName);
    }
  }

  let updatedFavoriteCities = [];
  if(prevFavoriteCitiesName.length == 0) {
    updatedFavoriteCities = [currentCity];
  }else if(prevFavoriteCitiesName.includes(currentCity.cityName)) {
    return;
  }  else {
    updatedFavoriteCities = [...prevFavoriteCities, currentCity];
  }
  
  localStorage.setItem("favorite", JSON.stringify(updatedFavoriteCities));

  var option = document.createElement("option");
  option.text = currentCity.cityName;
  option.value = JSON.stringify(currentCity.coordinate);
  let selector = document.getElementById("favorite");
  selector.appendChild(option);
  
}

 const favoriteBtn = document.getElementById("favorite-btn");
 favoriteBtn.addEventListener("click", addFavoriteCity);
