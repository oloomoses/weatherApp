import getLocationData from './locationData';

class UI {
  static searchFrom() {
    // const content = document.querySelector('.content');
    const form = document.querySelector('form');

    const input = `<input class="form-control mr-sm-2 location-value" type="search" placeholder="Search" aria-label="Search">
                   <button class="btn btn-outline-success my-2" type="submit">Search</button>`;

    form.innerHTML = input;
  }

  static showData() {
    const location = document.querySelector('.location-value');
    const cityName = document.querySelector('.location-name');
    // const dateTime = document.querySelector('.time');
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

        console.log(data);
      })
      .catch(error => {
        errorDisp.innerHTML = error;
      });
  }

  static toFahrenheit(temp) {
    temp = Math.round(temp * 1.8 + 32);
    return temp;
  }
}

export { UI as default };