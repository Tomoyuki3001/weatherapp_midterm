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
 }

 var getCityName = document.getElementById("option");
 getCityName.addEventListener("click" , search);
 function search(){
   var data = document.getElementById("option");
   localStorage.getItem("cityName", )

 }


//  localStorage.setItem('cityName', JSON.stringify(cityArr));

//  cityArr = JSON.parse( localStorage.getItem('CityName') ); 
//  localStorage.removeItem("cityName");




// let cityArr = ["a"];
// myStorage = localStorage;
// localStorage.setItem('history', JSON.stringify(cityArr)); 

// string stored in local storage: "[\"a\"]"

// To get it back you:
// cityArr = JSON.parse( localStorage.getItem('favorite') ); 
 
 
//  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 
  // function set() {
  // var k = document.getElementById("k").value;
  // var v = document.getElementById("v").value;
  // localStorage.setItem(k, v);
  // show_result();
  // }

