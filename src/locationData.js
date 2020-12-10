const getLocationData = async (city) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`);
  const data = await response.json();
  return data;
};

export { getLocationData as default };