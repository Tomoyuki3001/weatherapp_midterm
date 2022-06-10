const weatherForecastE1 = document.getElementById("weather-forecast-days");
const weatherForecastE2 = document.getElementById("weather-forecast-hours");

function showWheatherData(data) {
  function daysWheatherCreat() {
    const newDaysArray = [];
    const daysWheatherData = data.list;
    newDaysArray.push(
      daysWheatherData[5],
      daysWheatherData[13],
      daysWheatherData[21],
      daysWheatherData[29],
      daysWheatherData[37]
    );

    for (let i = 0; i < newDaysArray.length; i++) {
      const daysCard = document.createElement("div");
      daysCard.classList.add("days_card");

      let temp = newDaysArray[i].main.temp;
      let newTemp = Math.trunc(temp);
      let tempFeels = newDaysArray[i].main.feels_like;
      let newTempFeels = Math.trunc(tempFeels);
      let pop = Math.floor(newDaysArray[i].pop * 100);

      daysCard.innerHTML = `
    <div class="days_day">${moment(newDaysArray[i].dt * 1000).format(
      "ddd"
    )}</div>
      <img
        src="http://openweathermap.org/img/wn/${
          newDaysArray[i].weather[0].icon
        }@2x.png"
        alt="weather icon"
        class="days_weather-icon"
      />
      <div class="days_temp">${newTemp}&#176</div>
      <div class="days_feels">Feels like</div>
      <div class="days_temp_feels">${newTempFeels}&#176</div>
      
      <div class="days_pop"><span class="iconify days_pop_icon" data-icon="bi:cloud-rain-heavy" style="color: white; font-size: 17px;"></span> ${pop}%</div>

    `;
      weatherForecastE1.appendChild(daysCard);
    }
    const daysCardArray = document.querySelectorAll(".days_card");
    console.log(daysCardArray);
  }

  function hoursWheatherCreat() {
    const hoursData = data.list;
    for (let i = 0; i < 8; i++) {
      const hoursCard = document.createElement("div");
      hoursCard.classList.add("hours_box");

      let tempHours = hoursData[i].main.temp;
      let newTempHours = Math.trunc(tempHours);
      let tempFeelsHours = hoursData[i].main.feels_like;
      let newTempFeelsHours = Math.trunc(tempFeelsHours);
      let popHours = Math.floor(hoursData[i].pop * 100);
      let date = hoursData[i].dt_txt;
      let newDate = date.slice("5");
      let newDateEnd = newDate.slice("0", "-3");
      let changeDate = newDateEnd.replace("-", "/");
      let dateFinal = changeDate.slice("0", "-5");
      let timeFinal = changeDate.slice("5");

      hoursCard.innerHTML = `
    <div class="hours_date_box">
    <div class="hours_date">${dateFinal}</div>
    <div class="hours_time">${timeFinal}</div>
    </div>
    <div><img
    src="http://openweathermap.org/img/wn/${hoursData[i].weather[0].icon}@2x.png"
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
    }
  }
  hoursWheatherCreat();
  daysWheatherCreat();

  let dateObject = {};
  dateObject.name = "test";
  dateObject["country"] = "vancouver";

  console.log("data", data.list[0].dt);

  let test = data.list[0].dt;
  let date = new Date(test * 1000);

  data.list.forEach((value) => {
    console.log("value", value.dt);
  });
}

export default showWheatherData;
