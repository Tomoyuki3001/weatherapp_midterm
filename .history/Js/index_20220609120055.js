import shouw

function getWheatherData() {
    let selectedLocation;
    navigator.geolocation.getCurrentPosition((success) => {
      console.log(success);
      let { latitude, longitude } = success.coords;
  
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${WEATHER_OPEN_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          selectedLocation = data;
          showWheatherData(data);
        });
    });
  }