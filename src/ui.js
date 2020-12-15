import getLocationData from './locationData';
import clear from './images/clear.jpg';
import cloud from './images/cloud.jpg';
import rain from './images/rain.jpg';
import defaultImg from './images/default.jpg';

class UI {
  static searchFrom() {
    const form = document.querySelector('form');

    const input = `<input class="form-control mr-sm-2 location-value" type="search" placeholder="Search" aria-label="Search">
                   <button class="btn btn-outline-success my-2" type="submit">Search</button>`;

    form.innerHTML = input;
  }

  static showData() {
    const location = document.querySelector('.location-value');
    const cityName = document.querySelector('.location-name');
    const temp = document.querySelector('.temp');
    const weatherDescription = document.querySelector('.desc');
    const feels = document.querySelector('.feels-like');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const btn = document.querySelector('.checked-switch');
    const errorDisp = document.querySelector('.error');

    getLocationData(location.value)
      .then(data => {
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        weatherDescription.textContent = `${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind: ${data.wind.speed} km/h`;
        temp.innerHTML = `${data.main.temp}&deg;C`;
        feels.innerHTML = `Feels like: ${data.main.feels_like}&deg;C`;

        btn.addEventListener('change', () => {
          if (btn.checked) {
            setTimeout(() => {
              const tempData = UI.toFahrenheit(data.main.temp);
              const feelsLike = UI.toFahrenheit(data.main.feels_like);
              temp.innerHTML = `${tempData}&deg;F`;
              feels.innerHTML = `Feels like: ${feelsLike}&deg;F`;
            }, 200);
          } else {
            setTimeout(() => {
              temp.innerHTML = `${data.main.temp}&deg;C`;
              feels.innerHTML = `Feels like: ${data.main.feels_like}&deg;C`;
            }, 200);
          }
        });
        UI.setBackground(data);
      })
      .catch(error => {
        errorDisp.innerHTML = error;
      });
  }

  static toFahrenheit(temp) {
    temp = Math.round(temp * 1.8 + 32);
    return temp;
  }

  static setBackground(data) {
    switch (data.weather[0].main) {
      case 'Clear':
        document.body.style.backgroundImage = `url("${clear}")`;
        break;
      case 'Clouds':
        document.body.style.backgroundImage = `url("${cloud}")`;
        break;
      case 'Rain':
      case 'Drizzle':
      case 'Mist':
        document.body.style.backgroundImage = `url("${rain}")`;
        break;

      default:
        document.body.style.backgroundImage = `url("${defaultImg}")`;
        break;
    }
  }
}

export { UI as default };