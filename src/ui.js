import getLocationData from './locationData';

class UI {
  static searchFrom() {
    const content = document.querySelector('.content');
    const form = document.querySelector('form');

    const input = `<input class="form-control mr-sm-2 location-value" type="search" placeholder="Search" aria-label="Search">
                   <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>`;

    form.innerHTML = input;
    content.appendChild(form);
  }

  static showData() {
    const location = document.querySelector('.location-value');
    const locationName = document.createElement('div');
    locationName.classList.add('name-location');
    const dateTime = document.createElement('div');
    dateTime.classList.add('dateTime');

    const temp = document.createElement('dateTime');
    temp.classList.add('temperature');

    const condition = document.createElement('div');
    condition.classList.add('weather-condition');
    getLocationData(location.value)
      .then(data => {
        location.innerHTML = data.name;
      })
      .catch(error => console.log(error));

    location.innerHTML += locationName;
  }
}

export { UI as default };