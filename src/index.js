import getLocationData from './locationData';


const showData = () => {
  getLocationData('Nairobi')
    .then(response => {
      console.log(response);
    });
};

showData();
