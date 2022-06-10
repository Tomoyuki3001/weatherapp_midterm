import { getData } from "./index.js";

// Autocomplete Options
var options = {
  types: ["(cities)"]
};

// get DOM’s input element
var input = document.getElementById("autocomplete");
console.log("input",input)
// Make Autocomplete instance
document.addEventListener("DOMContentLoaded", () => {
  var autocomplete = new google.maps.places.Autocomplete(input, options);
  // Listener for whenever input value changes
  autocomplete.addListener("place_changed", function () {
    // Get place info
    var place = autocomplete.getPlace();
    // console.log("place", place.geometry.location.lat())
    localStorage.setItem("cityName", place.name)
    // Do whatever with the value!
    let latitude = place.geometry.location.lat();
    let longitude = place.geometry.location.lng();
    console.log(latitude, longitude)
    let coordinate = {cityName:place.name, latitude, longitude
     }
     console.log(coordinate);
     localStorage.setItem('cityData', JSON.stringify(coordinate))
    // localStorage.setItem("cordinate",latitude);
    getData("forecast", latitude, longitude); 
    getData("current", latitude, longitude);
  });
})
// let coordinate = {city, latitude, longitude}
// }
// localStorage.setItem('testObject', JSON.stringify(testObject));

// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

