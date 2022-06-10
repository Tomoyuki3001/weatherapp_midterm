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

var getButton = document.getElementById("button");
getButton.addEventListener("click", addOption);
function addOption() {
  console.log("click")
  // get select element
  var select = document.getElementById("favorite");
  // make option element
  var option = document.createElement("option");
  // set text "cityName" in option tag  
  option.text = localStorage.getItem("cityName");
  // set value 1 in option tag 
  option.value = 0;
  // add option tag to child select element
  select.appendChild(option);
  console.log(option)
 }
 