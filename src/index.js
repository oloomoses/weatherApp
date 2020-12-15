import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UI from './ui';


UI.searchFrom();

document.querySelector('form').addEventListener('submit', (e) => {
  UI.showData();
  e.preventDefault();
});
