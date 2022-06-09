import getCurrentDaysHours from "./getDataDaysHoursWeather";

getCurrentDaysHours();
let otherDays = "";

data.daily.forEach((day, idx) => {
  const dayDate = day.dt * 1000;
  if (idx == 0) {
  } else {
    otherDays += `
      <div class="weather-forecast-items">
      <div class="day">${moment(dayDate).format("dddd")}</div>
      <img
        src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
        alt="weather icon"
        class="weather-icon"
        />
        <div class="temp">Night - ${day.temp.night}&#176; C</div>
        <div class="temp">Day - ${day.temp.day}&#176; C</div>
        </div>
        `;
  }
});

weatherForecastE1.innerHTML = otherDays;

const hoursData = data.hourly;
console.log("hours data", hoursData);
const newArray = [];
newArray.push(
  hoursData[2],
  hoursData[5],
  hoursData[8],
  hoursData[11],
  hoursData[14],
  hoursData[17],
  hoursData[20],
  hoursData[23]
);
for (let i = 0; i < newArray.length; i++) {
  console.log("", newArray[i].weather[0]);
  const hoursCard = document.createElement("div");
  hoursCard.innerHTML = `
    <div class=".hours_box">
      <img
        src="http://openweathermap.org/img/wn/${newArray[i].weather[0].icon}@2x.png"
        alt="weather icon"
        class="weather-icon"
      />
      <div class="temp">Temperature - ${newArray[i].temp}&#176C</div>
    </div>
    `;
  weatherForecastE2.appendChild(hoursCard);
}
