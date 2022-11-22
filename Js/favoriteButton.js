function addFavoriteCity() {
  let currentCity = JSON.parse(localStorage.getItem("city"));

  let prevFavoriteCities = JSON.parse(localStorage.getItem("favorite"));
  let prevFavoriteCitiesName = [];

  if (prevFavoriteCities != null) {
    for (let city of prevFavoriteCities) {
      prevFavoriteCitiesName.push(city.cityName);
    }
  }

  let updatedFavoriteCities = [];
  if (prevFavoriteCitiesName.length == 0) {
    updatedFavoriteCities = [currentCity];
    // createFavoriteOption(currentCity.cityName);
  } else if (prevFavoriteCitiesName.includes(currentCity.cityName)) {
    let prevFavoriteCities = JSON.parse(localStorage.getItem("favorite"));
    let cityNum = prevFavoriteCitiesName.indexOf(currentCity.cityName);
    console.log("precity before", prevFavoriteCities);
    prevFavoriteCities.splice(cityNum, 1);
    updatedFavoriteCities = [...prevFavoriteCities];
    const cityOption = document.querySelector(
      `option[data-city=${currentCity.cityName}]`
    );
    console.log("city opt", cityOption);
    cityOption.remove();
  } else {
    updatedFavoriteCities = [...prevFavoriteCities, currentCity];
    // createFavoriteOption(currentCity.cityName);
  }
  localStorage.setItem("favorite", JSON.stringify(updatedFavoriteCities));

  // if (selector.hasChildNodes() === true) {
  //   const favoriteOptions = document.querySelectorAll("option");
  //   favoriteOptions.forEach((element) => {
  //     if (element.innerHTML == currentCity.cityName) {
  //       this.option.remove();
  //     }
  //   });
  // } else if (selector.hasChildNodes() === false) {
  //   var option = document.createElement("option");
  //   option.text = currentCity.cityName;
  //   option.value = JSON.stringify(currentCity.coordinate);
  //   option.classList.add("favorite");
  //   selector.appendChild(option);
  // }

  let selector = document.getElementById("favorite");
  var option = document.createElement("option");
  option.setAttribute("data-city", currentCity.cityName);
  option.text = currentCity.cityName;
  option.value = JSON.stringify(currentCity.coordinate);
  option.classList.add("favorite");
  selector.appendChild(option);
  // if (option.classList.contains("favorite")) {
  //   option.classList.remove("favorite");
  //   this.option.remove();
  // } else {
  //   option.classList.add("favorite");
  // }
}

const favoriteBtn = document.getElementById("favorite-btn");

$(favoriteBtn).on("click", () => {
  console.log("test click");
  addFavoriteCity();
});
