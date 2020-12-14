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
    getLocationData(location.value)
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  }
}

export { UI as default };