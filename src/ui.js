import getLocationData from './locationData';

class UI {
  static searchFrom() {
    const content = document.querySelector('.content');
    const form = document.querySelector('form');

    const input = `<input class="form-control mr-sm-2 location-value" type="search" placeholder="Search" aria-label="Search">
                   <button class="btn btn-outline-success my-2" type="submit">Search</button>`;

    form.innerHTML = input;
  }

  static showData() {
    const location = document.querySelector('.location-value');
    const cityName = document.querySelector('.location-name');
    const dateTime = document.querySelector('.time');
    const temp = document.querySelector('.temp');
    const weatherDescription = document.querySelector('.desc');
    const feels = document.querySelector('.feels-like');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');

    getLocationData(location.value)
      .then(data => {
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temp.textContent = `${data.main.temp}`;
        feels.textContent = `Feels like: ${data.main.feels_like}`;
        weatherDescription.textContent = `${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}`;
        wind.textContent = `Wind: ${data.wind.speed} km/h`;
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  static toFahrenheit(temp) {
    temp = parseFloat(temp);
    temp = Math.round((temp = temp * 1.8 + 32));
    return temp;
  }

  static toCelsius(temp) {
    temp = parseFloat(temp);
    temp = Math.round((temp = (temp - 32) * (5 / 9)));
    return temp;
  }

}

export { UI as default };