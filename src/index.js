import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UI from './ui';

document.addEventListener('DOMContentLoaded', UI.searchFrom());

document.querySelector('form').addEventListener('submit', (e) => {
  UI.showData();
  e.preventDefault();
});
