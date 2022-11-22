//Data setting for 5days html and 3hours html
const weatherForecastE1 = document.getElementById("weather-forecast-days");
const weatherForecastE2 = document.getElementById("weather-forecast-hours");

//Setting of making a object to get the wheather information

let dateObject = {};
function showWheatherData(data) {
  let dateObject = {};
  weatherForecastE1.innerHTML = "";
  weatherForecastE2.innerHTML = "";

  data.list.forEach((forecastObj) => {
    let date = forecastObj.dt_txt.slice(0, 10);
    let time = forecastObj.dt_txt.slice(10);
    forecastObj.dt_date = date;
    forecastObj.dt_time = time;
    delete data.list;
    data.newlist = forecastObj;

    let propertyName = forecastObj.dt_date;

    if (dateObject[propertyName]) {
      dateObject[propertyName].push(forecastObj);
    } else {
      dateObject[propertyName] = [];
      dateObject[propertyName].push(forecastObj);
    }
  });

  //Making 5days wheather forecast part

  let daysNewArray = Object.keys(dateObject);
  daysNewArray.forEach((day) => {
    const dayData = dateObject[day][0];
    const daysCard = document.createElement("div");
    daysCard.classList.add("days_card");
    let temp = dayData.main.temp;
    let newTemp = Math.trunc(temp);
    let tempFeels = dayData.main.feels_like;
    let newTempFeels = Math.trunc(tempFeels);
    let pop = Math.floor(dayData.pop * 100);
    daysCard.innerHTML = `
    <div class="days_day">${dayData.dt_date}</div>
        <img
          src="http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png"
          alt="weather icon"
          class="days_weather-icon"
        />
        <div class="days_temp">${newTemp}&#176</div>
        <div class="days_feels">Feels like</div>
        <div class="days_temp_feels">${newTempFeels}&#176</div>

        <div class="days_pop"><span class="iconify days_pop_icon" data-icon="bi:cloud-rain-heavy" style="color: white; font-size: 17px;"></span> ${pop}%</div>

      `;
    daysCard.setAttribute("name", day);
    weatherForecastE1.appendChild(daysCard);
  });

  ////Making 3hours wheather forecast part

  let hoursNewData = dateObject[daysNewArray[0]];

  function showUpHours(hoursNewData) {
    hoursNewData.forEach((hour) => {
      const hoursCard = document.createElement("div");
      hoursCard.classList.add("hours_box");

      let tempHours = hour.main.temp;
      let newTempHours = Math.trunc(tempHours);
      let tempFeelsHours = hour.main.feels_like;
      let newTempFeelsHours = Math.trunc(tempFeelsHours);
      let popHours = Math.floor(hour.pop * 100);
      let date = hour.dt_date;
      let time = hour.dt_time;
      hoursCard.innerHTML = `
      <div class="hours_date_box">
      <div class="hours_date">${date}</div>
      <div class="hours_time">${time.slice(0, 6)}</div>
      </div>
      <div><img
      src="http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png"
      alt="weather icon"
      class="hours_weather-icon"
    /></div>
     <div class="hours_temp">${newTempHours}&#176</div>
     <div class="hours_feels_box">
     <div class="hours_feels">Feels like</div>
     <div class="hours_temp_feels">${newTempFeelsHours}&#176</div>
     </div>
     <div class="hours_pop"><span class="iconify days_pop_icon" data-icon="bi:cloud-rain-heavy" style="color: white; font-size: 17px;"></span>${popHours}%</div>
      `;
      weatherForecastE2.appendChild(hoursCard);
    });
  }

  //When a user clicks each days, this 3hours forecast also will show up same day's forecast
  showUpHours(hoursNewData);
  const daysDateClick = document.querySelectorAll(".days_card");
  daysDateClick.forEach((dayClick) => {
    dayClick.addEventListener("click", (e) => {
      const day = e.target.parentElement.getAttribute("name");
      weatherForecastE2.innerHTML = "";
      showUpHours(dateObject[day]);
    });
  });
}

export default showWheatherData;
