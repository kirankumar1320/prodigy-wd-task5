const apiKey = '00788795557f60bd4ad1cc2605199085';

function getWeather() {
  const location = document.getElementById('locationInput').value.trim();

  if (!location) {
    alert("Oops! Please type a city name 😊");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weather = `
        <h2>📍 ${data.name}, ${data.sys.country}</h2>
        <p><strong>🌤️ Condition:</strong> ${data.weather[0].description}</p>
        <p><strong>🌡️ Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>🌬️ Wind:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weatherInfo').innerHTML = weather;
    })
    .catch(() => {
      document.getElementById('weatherInfo').innerHTML = '<p>😕 City not found. Try again with a different name!</p>';
    });
}
