
const apiKey = "e1612a0618eea4b194e061566236062f";

// Event listener for the search button
document.getElementById("searchBtn").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value;
  getWeather(city);
});

// Function to fetch weather data from the OpenWeatherMap API
function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
